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

      <v-form ref="form">
        <v-text-field
          v-model="nickname"
          :counter="10"
          :rules="nicknameRules"
          label="Name"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
  
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


        <v-checkbox 
            v-model="checkbox"
            label="Remember me">
        </v-checkbox>

        <v-btn class="mt-4" color="primary" block @click="login">
        SIGN IN
      </v-btn>
  
        <div class="d-flex flex-column">
          <v-btn class="mt-4" color="success" block @click="validate">
            CREATE ACCOUNT
          </v-btn>
        </div>

        <div class="auth-links">
        <a href="#" class="forgot-password">Forgot password?</a>
        <a href="#" class="create-account">Create new account</a>
      </div>
      </v-form>
    </v-sheet>
  </template>
  
  <script lang="ts" setup>
      import { ref, computed } from 'vue'
  
      const form = ref()
  
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
  
      async function validate() {
        const { valid } = await form.value.validate()
  
        if (valid) alert('회원가입이 정상적으로 처리되었습니다.')
      }

      
async function login() {
  const { valid } = await form.value.validate()
  if (valid) alert('로그인 성공!')
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