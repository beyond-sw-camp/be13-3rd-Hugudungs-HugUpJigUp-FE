<template>
    <v-app>
      <v-container>
        <v-btn color="primary" @click="dialog = true">
          자세히 보기 (팝업 확인용)
        </v-btn>
  
        <v-dialog v-model="dialog" max-width="600">
          <v-card color="white" style="position: relative;">
            <!-- 닫기 버튼 -->
            <v-icon
              icon="mdi-close"
              class="text-black"
              style="position: absolute; top: 16px; right: 16px; cursor: pointer;"
              @click="dialog = false"
            />
  
            <v-card-text class="pa-4">
              <div class="main-title">멘토링 신청</div>
  
              <v-textarea
                label="멘티 프로필"
                variant="outlined"
                auto-grow
                rows="5"
                style="margin-bottom: 16px;"
              ></v-textarea>
  
              <v-textarea
                label="멘토에게 남길 메시지"
                variant="outlined"
                auto-grow
                rows="5"
                style="margin-bottom: 24px;"
              ></v-textarea>
  
              <v-btn color="red" block @click="cancel" style="margin-bottom: 8px;">취소</v-btn>
              <v-btn color="black" block @click="submit">완료</v-btn>
  
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-app>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'ProfilePopupComponent',
    setup() {
      const dialog = ref(false);
  
      const cancel = () => {
        dialog.value = false;
        console.log('취소');
      };
  
      const submit = () => {
        // TODO: 폼 제출 로직 구현
        console.log('완료');
      };
  
      return {
        dialog,
        cancel,
        submit,
      };
    },
  });
  </script>
  
  <style scoped>
  /* 팝업 스타일 */
  .v-dialog {
    max-width: 600px; /* 팝업 가로 크기 조정 */
  }
  
  /* 닫기 버튼 스타일 */
  .v-card > .v-card-text > .v-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
  
  .main-title {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    margin-bottom: 24px;
  }
  </style>
  