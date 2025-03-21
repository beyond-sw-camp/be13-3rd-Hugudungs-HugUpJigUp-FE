<template>
    <v-app>
      <v-container>
        <v-row>
          <v-col
            v-for="(card, index) in cardData"
            :key="index"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="custom-card">
              <div class="image-container">
                <v-img
                  :src="card.image"
                  height="150"
                  cover
                  class="rounded-circle image-center"
                ></v-img>
              </div>
              <v-card-title class="text-center font-weight-bold">
                {{ card.title }}
              </v-card-title>
              <v-card-subtitle class="text-center">{{
                card.subtitle
              }}</v-card-subtitle>
              <v-card-text class="card-description">
                <div>• 경력</div>
                <div class="tab-space">{{ card.career }}</div>
                <div class="space-between-sections"></div>
                <div class="space-between-sections"></div>
                <div>• 자기소개</div>
                <div class="tab-space">{{ card.introduction }}</div>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="primary" text @click="viewDetails(card)">
                  자세히 보기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  interface Card {
    image: string;
    title: string;
    subtitle: string;
    career: string;
    introduction: string;
  }
  
  export default defineComponent({
    name: 'CardList',
    setup() {
      const cardData = ref<Card[]>([
        {
          image: 'https://randomuser.me/api/portraits/women/85.jpg',
          title: '연정',
          subtitle: '머피의 법칙 (Rock Ver)',
          career: '기타치며 노래하는 싱어송라이터',
          introduction: '안녕하세요! 음악으로 소통하는 연정입니다.',
        },
        {
          image: 'https://randomuser.me/api/portraits/women/86.jpg',
          title: '한로로',
          subtitle: '지   |   ㅂ',
          career: '학생',
          introduction: '동글동글한 한로로입니다.',
        },
        {
          image: 'https://randomuser.me/api/portraits/women/87.jpg',
          title: '해린',
          subtitle: 'Cool With you',
          career: '뉴진스',
          introduction: "마사에서 앨범형 '30세 이하' 인선",
        },
      ]);
  
      const viewDetails = (card: Card) => {
        alert(`상세 정보: ${card.title}`);
      };
  
      return {
        cardData,
        viewDetails,
      };
    },
  });
  </script>
  
  <style scoped>
  .custom-card {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border: 1px solid #ddd;
    width: 360px;
    height: 580px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
  }
  
  .image-container {
    width: 150px;
    height: 150px;
    margin: 10px auto;
  }
  
  .rounded-circle {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .image-center {
    display: block;
  }
  
  .card-description {
    font-size: 0.9em;
    margin-bottom: 10px;
  }
  
  .v-card-actions {
    padding: 10px;
  }
  
  .tab-space {
    margin-left: 20px;
  }
  
  .space-between-sections {
    margin-top: 10px;
  }
  </style>
  