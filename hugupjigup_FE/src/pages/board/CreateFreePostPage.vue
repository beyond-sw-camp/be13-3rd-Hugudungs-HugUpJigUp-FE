<template>
  <v-container fluid>
    <!-- 상단 로고 영역 -->

    <!-- 공지 게시판 작성 폼 -->
    <v-row justify="center">

      <v-col cols="12" md="8" lg="6">
      <CreatePostForm />

        <CreateNoticePostForm c />
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script lang="ts" setup>  
  import CreatePostForm from "@/components/common/PageBreadcrumb.vue";
  import CreateNoticePostForm from "@/components/board/CreatePostForm.vue";

  // 정운이 코드 수정 중
  </script>
  
  <style scoped>
  /* 필요 시 스타일 추가 */
  </style>
  