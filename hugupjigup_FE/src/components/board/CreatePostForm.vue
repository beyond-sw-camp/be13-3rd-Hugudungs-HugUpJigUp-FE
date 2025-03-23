<template>
    <div class="form-wrapper">
      <!-- 하얀색 둥근 카드 -->
      <v-card class="form-card" elevation="4" color="white" theme="light">
        <v-form class="pa-6">
          <v-text-field
            v-model="title"
            placeholder="제목을 입력해주세요."
            variant="underlined"
            hide-details
            class="mb-6 bold-placeholder"
          ></v-text-field>
  
          <v-textarea
            v-model="content"
            placeholder="내용을 입력해주세요."
            auto-grow
            rows="10"
            hide-details
            class="no-underline bold-placeholder"
          ></v-textarea>
        </v-form>
      </v-card>
  
      <!-- 버튼 영역 (카드 외부) -->
      <div class="button-wrapper">
        <v-btn color="red" @click="onCancel">취소</v-btn>
        <v-btn color="green" @click="onSubmit">완료</v-btn>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const title = ref<string>('')
  const content = ref<string>('')
  
  const onCancel = () => {
    console.log('취소됨')
  }
  
  const onSubmit = () => {
    console.log('제출됨:', {
      title: title.value,
      content: content.value
    })
  }
  </script>
  
  <style scoped>
  /* 전체 배경 */
  .form-wrapper {
    background-color: #0d1540;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  
  /* 흰색 카드 컴포넌트 (모서리 둥글게) */
  .form-card {
    width: 100%;
    max-width: 720px;
    border-radius: 12px;
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  /* 버튼 영역 - 카드 외부 */
  .button-wrapper {
    width: 100%;
    max-width: 720px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    padding: 16px 24px;
    background-color: #0d1540;
  }
  
  /* placeholder 굵게 */
  .bold-placeholder :deep(::placeholder) {
    font-weight: bold;
    color: #999;
  }
  
  /* 내용 입력창 밑줄 제거 */
  .no-underline :deep(.v-field__outline),
  .no-underline :deep(.v-field__underlined) {
    border-bottom: none !important;
    box-shadow: none !important;
  }
  </style>
  