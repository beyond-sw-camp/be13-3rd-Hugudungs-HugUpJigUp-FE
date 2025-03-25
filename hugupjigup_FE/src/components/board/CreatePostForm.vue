<template>
  <div class="form-wrapper">
    <!-- ✅ 상단 텍스트 링크 -->
    <div class="page-header">
      <router-link to="/board" class="breadcrumb-link bold">자유게시판</router-link>
      <span class="divider">/</span>
      <router-link to="/board/create" class="breadcrumb-link">게시글 작성</router-link>
    </div>

    <v-card class="form-card" elevation="4" color="white" theme="light">
      <v-form class="form-inner">
        <!-- 제목 입력 필드 -->
        <div class="custom-title-wrapper">
          <v-text-field
            v-model="title"
            placeholder="제목을 입력해주세요."
            variant="plain"
            hide-details
            class="title-field"
          ></v-text-field>
          <div class="custom-underline"></div>
        </div>

        <!-- 내용 입력 필드 -->
        <v-textarea
          v-model="content"
          placeholder="내용을 입력해주세요."
          auto-grow
          rows="10"
          variant="plain"
          hide-details
          class="content-textarea"
        ></v-textarea>
      </v-form>
    </v-card>

    <!-- 버튼 영역 -->
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
.form-wrapper {
  background-color: #0d1540;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.page-header {
  width: 100%;
  max-width: 960px;
  margin-bottom: 16px;
  font-size: 1rem;
  color: #ccc;
  display: flex;
  align-items: center;
  gap: 6px;
}

.breadcrumb-link {
  color: #cccccc;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: normal;
}

.breadcrumb-link.bold {
  font-weight: bold;
  color: #ffffff;
}

.breadcrumb-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.divider {
  color: #888;
}

.form-card {
  width: 100%;
  max-width: 960px;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-height: 600px;
}

.form-inner {
  padding: 24px;
}

.custom-title-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: -25px;
}

.title-field :deep(input::placeholder) {
  font-weight: bold;
  font-size: 1.2rem;
  color: #525252;
}

.custom-underline {
  height: 1.2px;
  background-color: #c8c8c8;
  margin-top: 5px;
}

.content-textarea :deep(textarea::placeholder) {
  font-weight: normal;
  font-size: 0.85rem;
  color: #999;
}

.content-textarea :deep(.v-input__control) {
  background-color: transparent !important;
  padding: 0 !important;
  margin-top: -30px;
  min-height: 160px;
}

.title-field :deep(.v-input__control),
.content-textarea :deep(.v-input__control) {
  border: none !important;
  box-shadow: none !important;
}

.button-wrapper {
  width: 100%;
  max-width: 960px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 24px;
  background-color: #0d1540;
}
</style>