<template>
    <v-container class="pa-4" style="max-width: 500px">
      <v-card class="pa-6">
        <v-form ref="formRef">
          <v-text-field
            v-model="phone"
            label="전화번호"
            placeholder="01012345678"
            :rules="[rules.required, rules.phone]"
          />
  
          <v-btn
            class="mt-4"
            color="primary"
            @click="handleSignUp"
          >
            회원가입
          </v-btn>
        </v-form>
      </v-card>
  
      <!-- OTP 팝업 -->
      <OTPVerify :phone="phone" v-model="otpDialogVisible" />
    </v-container>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import OTPVerify from '@/components/sign/OTPVerify.vue'
  
  const phone = ref('')
  const otpDialogVisible = ref(false)
  const formRef = ref()
  
  const rules = {
    required: (v: string) => !!v || '필수 입력 항목입니다.',
    phone: (v: string) =>
      /^01[016789][0-9]{7,8}$/.test(v) || '유효한 전화번호를 입력하세요.',
  }
  
  // async 추가
  async function handleSignUp() {
  const result = await formRef.value?.validate()

  // Vuetify 3: validate()는 { valid: true } 형태로 반환될 수 있음
  const isValid = typeof result === 'object' ? result.valid : result

  if (!isValid) return

  otpDialogVisible.value = true
    }
  </script>
  