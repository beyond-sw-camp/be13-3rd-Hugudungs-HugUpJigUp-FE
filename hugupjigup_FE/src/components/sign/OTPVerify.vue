<template>
  <v-dialog v-model="dialogVisible" max-width="420" scrim="transparent">
    <v-card
      class="py-12 px-8 text-center mx-auto ma-4 bg-white text-black"
      elevation="0"
      max-width="420"
      width="100%"
    >

      <h3 class="text-h6 mb-2">
        Please enter the one time password to verify your account
      </h3>

      <div>A code has been sent to {{ maskedEmail }}</div>

      <!-- 이 부분은 그대로 유지 -->
      <v-otp-input
        v-model="otp"
        :disabled="validating"
        color="primary"
        variant="plain"
      ></v-otp-input>

      <!-- 버튼도 그대로 유지 -->
      <v-btn
        :loading="validating"
        class="mt-6 text-none bg-surface-variant mx-auto"
        height="40"
        text="Validate"
        variant="plain"
        width="135"
        border
        rounded
        @click="onClick"
      >
      </v-btn>
    </v-card>
  </v-dialog>

  </template>

  <script lang="ts" setup>
  import { ref, computed } from 'vue'
  import {signup, verificationOtp} from "@/usecases/user_usecase";

  const props = defineProps<{
    email: string
    password: string
    nickname: string
    modelValue: boolean
  }>()

  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'otp-success'): void;
    (e: 'otp-fail'): void
  }>()

  const dialogVisible = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
  })

  const otp = ref('')
  const validating = ref(false)

  const maskedEmail = computed(() => {
    return '****@****' + props.email.slice(-4)
  })

  // OTP 검증 로직 (가상의 검증 로직 추가 가능)
async function verifyOTP(): Promise<boolean> {
    return  await verificationOtp({ email: props.email, otp: otp.value });
}

  async function onClick() {
    validating.value = true;

    console.log(props.password);

    const isValid: boolean = await verifyOTP();

    validating.value = false
    dialogVisible.value = false

    if(!isValid) {
      emit('otp-fail') // OTP 실패 이벤트 발생
      return;
    }

    const signUpRequest: boolean = await signup({
        email: props.email,
        password: props.password,
        nickname: props.nickname
      });

    if (signUpRequest) {
      emit('otp-success') // OTP 성공 이벤트 발생
    } else {
      emit('otp-fail') // OTP 실패 이벤트 발생
    }
  }
  </script>
<style>
/* 그림자와 둥근 테두리 추가 */
.v-otp-input .v-input,
.v-otp-input .v-field {
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.25) !important;
  border-radius: 6px;
  transition: box-shadow 0.2s ease;
}

.v-overlay__content {
  box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.25) !important;
  border-radius: 12px !important;
  transition: box-shadow 0.3s ease;
}
</style>

