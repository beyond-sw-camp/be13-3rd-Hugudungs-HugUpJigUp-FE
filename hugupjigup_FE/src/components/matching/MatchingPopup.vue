<template>
  <v-dialog v-model="dialog" max-width="1000">
    <template #activator="{ props }">
      <v-btn color="primary" v-bind="props">자세히 보기</v-btn>
    </template>

    <!-- 둥근 팝업 카드 -->
    <v-card
      color="white"
      class="pa-4"
      style="position: relative; border-radius: 16px;"
    >
      <!-- 닫기 버튼 -->
      <v-icon
        icon="mdi-close"
        class="text-black"
        style="position: absolute; top: 16px; right: 16px; cursor: pointer;"
        @click="dialog = false"
      />

      <!-- 태그 리스트 -->
      <div style="position: absolute; top: 56px; right: 16px; z-index: 1;">
        <v-chip
          v-for="(tag, index) in card.tags"
          :key="index"
          class="bg-black text-white me-1 mb-1"
          size="small"
          style="border-radius: 6px;"
        >
          <v-icon start size="16" class="text-white">mdi-check</v-icon>
          {{ tag }}
        </v-chip>
      </div>

      <v-card-title class="text-h6 font-weight-bold pb-6">
        {{ card.title }}
      </v-card-title>

      <v-card-text class="py-2">
        <v-row align="center">
          <v-col cols="12" sm="3" class="d-flex justify-center">
            <!-- 동그란 프로필 이미지 -->
            <div
              style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden;"
            >
              <v-img :src="card.image" cover width="100%" height="100%" />
            </div>
          </v-col>

          <v-col cols="12" sm="9" class="pt-0">
            <div class="text-h5 font-weight-bold mb-2">{{ card.name }}</div>

            <div class="mb-1" v-if="card.career">
              <span class="label">경력:</span>
              <span class="value">{{ card.career }}</span>
            </div>

            <div class="mb-1" v-if="card.job">
              <span class="label">현직:</span>
              <span class="value">{{ card.job }}</span>
            </div>

            <div
              class="text-grey-darken-1 mt-3"
              v-if="card.info"
              style="white-space: pre-line;"
            >
              {{ card.info }}
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-4" />

        <div class="mb-4">
          <div class="section-label">• 경력</div>
          <div class="text-grey-darken-1">{{ card.company }}</div>
        </div>

        <div>
          <div class="section-label">• 자기소개</div>
          <div class="introduction-scroll-wrapper">
            <div class="scrollable-text">
              {{ card.introduction }}
            </div>
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn block class="bg-black text-white">멘토링 신청하기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)

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
  }
}>()
</script>

<style scoped>
.label {
  font-weight: normal;
  color: #000;
  margin-right: 4px;
}

.value {
  color: #000;
}

.section-label {
  color: #666;
  font-weight: normal;
  margin-bottom: 4px;
}

.introduction-scroll-wrapper {
  max-height: 200px; /* 기존보다 약간 높임 */
  overflow-y: auto;
  padding: 12px 6px; /* 상하 여백 추가 */
  margin-bottom: 16px;
  background-color: #ffffff; /* 배경색 살짝 주면 구분감 ↑ */
  border-radius: 8px; /* 둥근 느낌 */
}

.scrollable-text {
  white-space: pre-line;
  color: #666;
  line-height: 1.5;
  font-size: 0.95rem;
}
</style>
