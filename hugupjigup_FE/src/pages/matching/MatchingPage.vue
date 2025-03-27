<template>
  <v-container class="px-6" style="max-width: 1280px; margin: 0 auto;">
    <!-- 상단 바 -->
    <v-row align="center" class="mt-6 mb-4">
      <v-col cols="12" md="6">
        <PageBreadcrumb />
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-end align-center">
        <div class="d-flex align-center" style="gap: 8px; max-width: 650px; width: 100%;">
          <div style="flex-grow: 1;">
            <SearchActionBar />
          </div>
          <v-btn color="primary" @click="showForm = true">작성</v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- 카드 리스트 + 페이지네이션 -->
    <v-card class="pa-6 match-card-container" elevation="3" color="white">

      <!-- ✅ 상단: 태그 버튼 -->
      <v-row class="mb-4">
        <v-col cols="12">
          <div class="d-flex flex-wrap gap-2">
            <div
              v-for="tag in tags"
              :key="tag"
              :class="['tag-button', { active: selectedTag === tag }]"
              @click="toggleTag(tag)"
            >
              <span v-if="selectedTag === tag" class="check-icon">✓</span>
              {{ tag }}
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- ✅ 멘토링 / 리뷰 탭 (중앙 정렬) -->
      <div class="mentoring-review-tabs mb-6">
        <div
          class="tab-button"
          :class="{ active: currentTab === 'mentoring' }"
        >
          멘토링
        </div>
        <div
          class="tab-button"
          @click="goToReview"
        >
          리뷰
        </div>
      </div>

      <!-- 카드 컴포넌트 -->
      <MatchingPagination :cards="filteredCards" />
    </v-card>

    <!-- 작성 팝업 -->
    <CreateMatchingForm v-model:dialog="showForm" />
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
import SearchActionBar from '@/components/common/SearchActionBar.vue'
import MatchingPagination from '@/components/common/MatchingPagination.vue'
import CreateMatchingForm from '@/components/matching/CreateMatchingForm.vue'

// 데이터
const showForm = ref(false)
const tags = ['C언어', '자바', '파이썬']
const selectedTag = ref<string | null>(null)

// 탭 상태
const currentTab = ref<'mentoring' | 'review'>('mentoring')
const router = useRouter()

function toggleTag(tag: string) {
  selectedTag.value = selectedTag.value === tag ? null : tag
}

function goToReview() {
  currentTab.value = 'review'
  router.push('/matchingcomment')
}

// 카드 필터링
const cardData = [
  {
    image: 'https://randomuser.me/api/portraits/women/86.jpg',
    name: '연정',
    title: '머피의 법칙(Rock ver)',
    career: '3년차',
    job: '웹 개발 프로그래머',
    tags: ['C언어'],
    company: '그루엔 엔터테인먼트',
    info: `서경대 재학하며 기타 세션 활동 및 유튜브 참여.\n자작곡 '머피의 법칙', '놀이터' 등을 발표.`,
    introduction: `초등학교 시절 드럼에 매료 → 통기타 → 일렉기타로 진로 확정. 잘 부탁 드립니다!`,
  },
  {
    image: 'https://randomuser.me/api/portraits/women/87.jpg',
    name: '연정',
    title: '머피의 법칙(Rock ver)',
    career: '3년차',
    job: '웹 개발 프로그래머',
    tags: ['자바'],
    company: '그루엔 엔터테인먼트',
    info: `서경대 재학하며 기타 세션 활동 및 유튜브 참여.`,
    introduction: `초등학교 시절 드럼에 매료 → 통기타 → 일렉기타로 진로 확정.`,
  },
  {
    image: 'https://randomuser.me/api/portraits/women/85.jpg',
    name: '연정',
    title: '머피의 법칙(Rock ver)',
    career: '3년차',
    job: '웹 개발 프로그래머',
    tags: ['파이썬'],
    company: '그루엔 엔터테인먼트',
    info: `서경대 재학하며 기타 세션 활동 및 유튜브 참여.`,
    introduction: `초등학교 시절 드럼에 매료 → 통기타 → 일렉기타로 진로 확정.`,
  },
]

const filteredCards = computed(() => {
  if (!selectedTag.value) return cardData
  return cardData.filter(card => card.tags?.includes(selectedTag.value as string))
})
</script>

<style scoped>
.match-card-container {
  background-color: white;
  border-radius: 12px;
  width: 100%;
}

.tag-button {
  margin-right: 12px;
  margin-bottom: 12px;
  padding: 8px 16px;
  background-color: #f2f2f2;
  color: #666;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;
  transition: all 0.2s;
}

.tag-button .check-icon {
  margin-right: 6px;
  font-size: 14px;
}

.tag-button.active {
  background-color: #000;
  color: #fff;
}

.mentoring-review-tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
}

.tab-button {
  padding: 6px 12px;
  border-radius: 10px;
  background-color: #f2f2f2;
  color: #666;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-button.active {
  background-color: #000;
  color: #fff;
}
</style>
