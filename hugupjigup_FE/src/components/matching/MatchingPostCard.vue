<template>
  <v-card class="custom-card cardStyle">
    <div class="image-container">
      <v-img :src="card.image" height="150" cover class="rounded-circle image-center" />
    </div>

    <v-card-title class="text-center font-weight-bold card-title-text title-style">
      {{ card.title }}
    </v-card-title>

    <v-card-subtitle class="text-center card-subtitle-text subtitle-style">
      {{ card.subtitle }}
    </v-card-subtitle>

    <v-card-text class="card-description card-text">
      <div>• 경력</div>
      <div class="tab-space">{{ card.career }}</div>
      <div class="space-between-sections"></div>
      <div>• 자기소개</div>
      <div class="tab-space">{{ card.introduction }}</div>
    </v-card-text>

    <v-card-actions class="justify-center">
      <!-- 팝업 연결 -->
      <MatchingPopup :card="card" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import MatchingPopup from '@/components/matching/MatchingPopup.vue'

defineProps<{ card: {
  image: string;
  title: string;
  subtitle: string;
  career: string;
  introduction: string;
} }>()
</script>

<style scoped>
/* 기존 스타일 그대로 유지 */
.custom-card {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #ddd;
  width: 360px;
  height: 580px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  background-color: white;
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
.card-title-text,
.card-subtitle-text,
.card-text {
  color: #666666;
}
.title-style {
  font-size: 2em;
}
.subtitle-style {
  font-size: 1.5em;
  font-weight: 800;
  color: #333333;
}
.card-description {
  font-size: 0.9em;
  margin-bottom: 10px;
}
.tab-space {
  margin-left: 20px;
}
.space-between-sections {
  margin-top: 10px;
}
.details-button {
  background-color: black;
  color: white;
}
</style>