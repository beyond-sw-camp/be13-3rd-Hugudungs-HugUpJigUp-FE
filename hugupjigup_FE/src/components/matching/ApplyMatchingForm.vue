<template>
    <teleport to="body">
      <div v-if="dialogValue" class="custom-dialog-overlay">
        <div class="custom-dialog">
          <!-- 닫기 버튼 -->
          <button class="close-button" @click="closeDialog">×</button>
  
          <!-- 제목 -->
          <div class="dialog-title">멘토링 신청</div>
  
          <!-- 멘티 프로필 입력 -->
          <textarea
            v-model="menteeProfile"
            class="custom-textarea"
            placeholder="멘티 프로필"
          ></textarea>
  
          <!-- 멘토에게 남길 메시지 -->
          <textarea
            v-model="menteeMessage"
            class="custom-textarea"
            placeholder="멘토에게 남길 메시지"
          ></textarea>
  
          <!-- 버튼 영역 -->
          <div class="button-group">
            <button class="btn cancel" @click="closeDialog">취소</button>
            <button class="btn submit" @click="submitForm">완료</button>
          </div>
        </div>
      </div>
    </teleport>
  </template>
  
  
  <script setup lang="ts">
  import { ref, computed, defineProps, defineEmits } from 'vue'
  
  const props = defineProps<{ dialog: boolean }>()
  const emit = defineEmits(['update:dialog'])
  
  const dialogValue = computed({
    get: () => props.dialog,
    set: (val) => emit('update:dialog', val)
  })
  
  const menteeProfile = ref('')
  const menteeMessage = ref('')
  
  const closeDialog = () => {
    emit('update:dialog', false)
  }
  
  const submitForm = () => {
    console.log('멘티 프로필:', menteeProfile.value)
    console.log('멘토에게 남길 메시지:', menteeMessage.value)
    alert('멘토링 신청이 완료되었습니다!')
    closeDialog()
  }
  </script>
  
  <style scoped>
  /* 다이얼로그 전체 배경 */
  .custom-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  
  /* 다이얼로그 박스 */
  .custom-dialog {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 24px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    position: relative;
  }
  
  /* 닫기 버튼 */
  .close-button {
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    border: none;
    font-size: 22px;
    font-weight: bold;
    color: #000;
    cursor: pointer;
  }
  
  /* 제목 */
  .dialog-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #000;
  }
  
  /* 입력 필드 */
  .custom-textarea {
    width: 100%;
    min-height: 80px;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 16px;
    font-size: 14px;
    color: #000;
    background-color: #fff;
    resize: vertical;
    outline: none;
  }
  
  /* 버튼 그룹 */
  .button-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  /* 버튼 공통 스타일 */
  .btn {
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    color: white;
  }
  
  /* 취소 버튼 - 빨간색 */
  .cancel {
    background-color: #ff0000;
  }
  
  /* 완료 버튼 - 검정색 */
  .submit {
    background-color: #000000;
  }

  .custom-dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999 !important; /* 최상위 */
}

.custom-dialog {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 10000 !important;
}
</style>