<template>
    <v-dialog v-model="dialogVisible" max-width="420">
      <v-card
        class="py-12 px-8 text-center mx-auto ma-4"
        max-width="420"
        width="100%"
      >
        <h3 class="text-h6 mb-2">
          Please enter the one time password to verify your account
        </h3>

        <div>A code has been sent to {{ maskedEmail }}</div>

        <v-otp-input
          v-model="otp"
          :disabled="validating"
          color="primary"
          variant="plain"
        ></v-otp-input>

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
