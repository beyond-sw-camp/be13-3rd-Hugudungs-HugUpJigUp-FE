<template>
    <v-app>
      <v-container class="d-flex justify-center align-center" style="height: 100vh;">
        <v-card 
          @click="navigateToPage" 
          class="clickable-card"
          max-width="500px"
        >
          <v-card-title class="text-h5 font-weight-bold text-center">
            {{ cardData.title }}
          </v-card-title>
          <v-card-subtitle class="text-h6 text-center">
            {{ cardData.subtitle }}
          </v-card-subtitle>
        </v-card>
      </v-container>
    </v-app>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  interface CardData {
    title: string;
    subtitle: string;
  }
  
  const cardData = ref<CardData>({
    title: '작성한 게시글', 
    subtitle: '1'
  });
  
  // 라우터 인스턴스 가져오기
  const router = useRouter();
  
  // 페이지 이동 함수
  const navigateToPage = () => {
    router.push('/posts'); // 이동할 경로 지정
  };
  </script>
  
  <style scoped>
  .v-card-title, .v-card-subtitle {
    width: 100%;
    display: block;
  }
  
  .clickable-card {
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .clickable-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  </style>
  