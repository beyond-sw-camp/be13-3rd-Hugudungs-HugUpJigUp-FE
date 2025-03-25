<template>
  <v-sheet class="mx-auto" elevation="4" width="300">
        <div class="divider-text">Sign in with</div>

        <div class="oauth-section">
            <button class="oauth-button">
              <v-icon>mdi-github</v-icon>
              GITHUB
            </button>
            <button class="oauth-button">
              <v-icon>mdi-google</v-icon>
              GOOGLE
            </button>
          </div>

          <div class="divider-text">Or sign up with credentials</div>

      <v-form ref="formRef">
        <v-text-field
          v-model="nickname"
          :counter="10"
          :rules="nicknameRules"
          label="Name"
          required
          variant="outlined"
      :error="nicknameError"
      :error-messages="nicknameErrorMsg"
      append-inner-icon="mdi-check-circle"
      clearable
        >
        <template v-slot:append-inner>
        <v-btn variant="text" color="primary" @click="checkNickname">
          중복 확인
        </v-btn>
      </template>
      </v-text-field>
  
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
          variant="outlined"
      type="email"
      :error="emailError"
      :error-messages="emailErrorMsg"
      append-inner-icon="mdi-check-circle"
      clearable
        >
        <template v-slot:append-inner>
        <v-btn variant="text" color="primary" @click="checkEmail">
          중복 확인
        </v-btn>
      </template>
    </v-text-field>
  
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          :type="hidePassword ? 'password' : 'text'"
          append-icon="mdi-eye"
            @click:append="togglePassword"
          required
        ></v-text-field>
  
        <div class="password-strength">
          password strength:
          <span :class="strengthColor">{{ passwordStrength }}</span>
        </div>
  
        <v-checkbox
          v-model="checkbox"
          :rules="[(v: boolean) => !!v || '진행하려면 약관에 동의해야 합니다.']"
          required
        >
          <template v-slot:label>
            I agree with the&nbsp;
            <a
              href="#"
              target="_blank"
              style="color: blue; text-decoration: underline"
            >
              Privacy Policy </a
            >
          </template>
        </v-checkbox>
  
        <div class="d-flex flex-column">
          <v-btn class="mt-4" color="success" block @click="validate">
            CREATE ACCOUNT
          </v-btn>
        </div>
      </v-form>

      <!-- OTP 팝업 -->
      <OTPVerify :email="email" v-model="otpDialogVisible" @otp-success="onOTPSuccess" @otp-fail="onOTPFail" />
    </v-sheet>
</template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import OTPVerify from '@/components/sign/OTPVerify.vue'
  import axios from 'axios'
  
  const router = useRouter()
  const formRef = ref()
  const otpDialogVisible = ref(false)

  const nicknameError = ref(false)
const nicknameErrorMsg = ref('')
const emailError = ref(false)
const emailErrorMsg = ref('')
  
      const nickname = ref<string>('')
      const nicknameRules = ref([
        (v: string) => !!v || '닉네임을 작성해 주세요',
        (v: string) => (v && v.length <= 10) || '닉네임은 최대 10자 입니다.',
      ])
  
      const email = ref<string>('')
      const emailRules = ref([
        (v: string) => !!v || '이메일을 입력해 주세요.',
        (v: string) => (/.+@.+\..+/.test(v)) || '이메일 형식이 올바르지 않습니다.',
      ])
  
      const password = ref<string>('')
      const passwordRules = ref([
        (v: string) => !!v || '비밀번호를 입력해 주세요.',
        (v: string) => (/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/.test(v)) || '비밀번호는 영문, 숫자, 특수 기호를 포함한 최소 8자 이상이여야 합니다.',
      ])

      const hidePassword = ref<boolean>(true)
function togglePassword() {
  hidePassword.value = !hidePassword.value
}
  
    const passwordStrength = computed(() => {
      if (!password.value) return ''
      if (password.value.length >= 8) return 'strong'
      if (password.value.length >= 4) return 'medium'
      return 'weak'
    })
  
    const strengthColor = computed(() => {
      switch (passwordStrength.value) {
        case 'strong': return 'text-strong'
        case 'medium': return 'text-medium'
        case 'weak':   return 'text-weak'
        default:       return ''
      }
    })
  
      const checkbox = ref<boolean>(false)

  
  // async 추가
  async function validate() {
  const result = await formRef.value?.validate()

  // // Vuetify 3: validate()는 { valid: true } 형태로 반환될 수 있음
  // const isValid = typeof result === 'object' ? result.valid : result

  if (!result.valid) return

  otpDialogVisible.value = true
    }

    // OTP 인증 성공 시 실행되는 함수
function onOTPSuccess() {
  // otpDialogVisible.value = false // OTP 팝업 닫기
  alert('회원가입이 정상적으로 처리되었습니다.') // 성공 메시지 출력
  router.push('/login')
}

// OTP 인증 실패 시 alert 표시
function onOTPFail() {
  alert('OTP 인증에 실패했습니다.')
}

// 닉네임 중복 확인
async function checkNickname() {
  try {
    const response = await axios.get(`/api/v1/auth/duplicate/email/{email}`, { params: { nickname: nickname.value } })
    if (response.data.available) {
      nicknameError.value = false
      nicknameErrorMsg.value = "사용 가능한 닉네임입니다."
    } else {
      nicknameError.value = true
      nicknameErrorMsg.value = "이미 사용 중인 닉네임입니다."
    }
  } catch (error) {
    console.error(error)
    nicknameError.value = true
    nicknameErrorMsg.value = "중복 확인 중 오류가 발생했습니다."
  }
}

// 이메일 중복 확인
async function checkEmail() {
  try {
    const response = await axios.get(`/api/v1/auth/duplicate/nickname/{nickname}`, { params: { email: email.value } })
    if (response.data.available) {
      emailError.value = false
      emailErrorMsg.value = "사용 가능한 이메일입니다."
    } else {
      emailError.value = true
      emailErrorMsg.value = "이미 사용 중인 이메일입니다."
    }
  } catch (error) {
    console.error(error)
    emailError.value = true
    emailErrorMsg.value = "중복 확인 중 오류가 발생했습니다."
  }
}
  </script>
  
  <style scoped>
/* ========= 소셜 로그인 버튼 영역 ========= */
.oauth-section {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
}

/* ========= 소셜 로그인 버튼 ========= */
.oauth-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
}

.oauth-button:hover {
  opacity: 0.8;
}

/* ========= 구분 텍스트 ========= */
.divider-text {
  text-align: center;
  color: #555;
  margin-bottom: 16px;
  font-size: 0.9rem;
}

/* ========= 비밀번호 강도 표시 ========= */
.password-strength {
  margin: 4px 0 0 2px;
  font-size: 0.85rem;
  color: #666;
}
.text-strong {
  color: green;
}
.text-medium {
  color: orange;
}
.text-weak {
  color: red;
}


/* ========= 하단 링크 영역 ========= */
.auth-links {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 0.85rem;
}

.auth-links a {
  color: blue;
  text-decoration: underline;
}

.auth-links a:hover {
  text-decoration: none;
}
</style>