<template>
  <v-card class="custom-card">
    <!-- 프로필 이미지 -->
    <div class="image-container">
      <v-img :src="card.image" height="150" cover class="rounded-circle" />
    </div>

    <!-- 이름 -->
    <v-card-title class="text-center name-text">
      {{ card.name }}
    </v-card-title>

    <!-- 타이틀 -->
    <v-card-subtitle class="text-center title-text">
      {{ card.title }}
    </v-card-subtitle>

    <v-card-text class="card-text-section">
      <div class="section-label">• 경력</div>
      <div class="section-content">{{ card.job || '-' }}</div>

      <div class="space-between-sections"></div>

      <div class="section-label">• 자기소개</div>
      <div class="section-content">{{ card.introduction || '-' }}</div>
    </v-card-text>

    <!-- MatchingPopup activator로 감싼 버튼 -->
    <v-card-actions class="justify-center">
      <MatchingPopup :card="card" />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import MatchingPopup from '@/components/matching/MatchingPopup.vue'

defineProps<{
  card: {
    image: string;
    name: string;
    title: string;
    career?: string;
    job?: string;
    tags?: string[];
    company: string;
    info?: string;
    introduction?: string;
  };
}>()
</script>

<style scoped>
.custom-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  width: 320px;
  min-height: 520px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
}

.image-container {
  width: 120px;
  height: 120px;
  margin: 10px auto;
}

.rounded-circle {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.name-text {
  font-weight: bold;
  font-size: 1.4em;
  color: #505050;
  margin-bottom: 4px;
}

.title-text {
  font-weight: bold;
  font-size: 1.1em;
  color: #000;
  margin-bottom: 12px;
}

.card-text-section {
  font-size: 0.9em;
  color: #666;
}

.section-label {
  font-weight: normal;
  color: #666;
  margin-bottom: 16px;
}

.section-content {
  color: #999;
  margin-left: 16px;
  white-space: pre-line;
  margin-bottom: 16px;
}

.space-between-sections {
  margin-top: 12px;
}

/* MatchingPopup 안의 버튼 스타일 오버라이드 */
:deep(.v-btn) {
  background-color: black !important;
  color: white !important;
  border-radius: 8px;
  font-weight: 500;
}
</style>
