<template>
    <v-container fluid>
      <!-- 상단 로고 영역 -->
      <LogoTap/>
      <NoticePageBreadcrumb/>
  
      <!-- 공지 게시판 작성 폼 -->
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <CreateNoticePostForm />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts" setup>  


  import CreateNoticePostForm from '@/components/board/CreateNoticePostForm.vue';
  import NoticePageBreadcrumb from '@/components/common/NoticePageBreadcrumb.vue';
  
  
  </script>
  
  <style scoped>
  /* 필요 시 스타일 추가 */
  </style>
  