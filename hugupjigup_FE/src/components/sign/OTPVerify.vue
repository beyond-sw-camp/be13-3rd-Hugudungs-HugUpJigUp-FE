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
  
        <div>A code has been sent to {{ maskedPhone }}</div>
  
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
  
  const props = defineProps<{
    phone: string
    modelValue: boolean
  }>()
  
  const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
  }>()
  
  const dialogVisible = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
  })
  
  const otp = ref('')
  const validating = ref(false)
  
  const maskedPhone = computed(() => {
    return '***-****-' + props.phone.slice(-4)
  })
  
  function onClick() {
    validating.value = true
  
    setTimeout(() => {
      validating.value = false
      dialogVisible.value = false
    }, 2000)
  }
  </script>
  