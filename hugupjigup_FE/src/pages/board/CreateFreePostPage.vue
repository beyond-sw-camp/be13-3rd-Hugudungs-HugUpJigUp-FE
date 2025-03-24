<template>
    <v-container fluid>
      <!-- 상단 로고 영역 -->
      <LogoTap />
  
      <!-- 자유 게시판 작성 폼 -->
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <CreatePostForm />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts" setup>
  import LogoTap from '@/components/common/LogoTap.vue'
  import CreatePostForm from '@/components/board/CreatePostForm.vue'
  </script>
  
  <style scoped>
  /* 필요 시 스타일 추가 */
  </style>
  