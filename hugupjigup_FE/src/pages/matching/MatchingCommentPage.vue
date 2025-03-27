<template>
    <v-container class="px-6" style="max-width: 1280px; margin: 0 auto;">
      <!-- 상단 바 -->
      <v-row align="center" class="mt-6 mb-4">
        <v-col cols="12" md="6"><PageBreadcrumb /></v-col>
        <v-col cols="12" md="6" class="d-flex justify-end align-center">
          <div class="d-flex align-center" style="gap: 8px; max-width: 650px; width: 100%;">
            <div style="flex-grow: 1;"><SearchActionBar /></div>
            <v-btn color="primary" @click="showForm = true">작성</v-btn>
          </div>
        </v-col>
      </v-row>
  
      <!-- 카드 컨테이너 -->
      <v-card class="pa-6 match-card-container" elevation="3" color="white">
        <!-- 태그 필터 -->
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
  
        <!-- 탭 -->
        <div class="mentoring-review-tabs mb-6">
          <div
            class="tab-button"
            :class="{ active: currentTab === 'mentoring' }"
            @click="goToMentoring"
          >
            멘토링
          </div>
          <div class="tab-button" :class="{ active: currentTab === 'review' }">
            리뷰
          </div>
        </div>
  
        <!-- 카드 페이징 -->
        <MatchingCommentPagination :cards="filteredCards" />
      </v-card>
  
      <!-- 후기 작성 폼 -->
      <CreateMatchingCommentForm v-model:dialog="showForm" />
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
  import SearchActionBar from '@/components/common/SearchActionBar.vue'
  import CreateMatchingCommentForm from '@/components/matching/CreateMatchingCommentForm.vue'
  import MatchingCommentPagination from '@/components/common/MatchingCommentPagination.vue'
  
  const showForm = ref(false)
  const tags = ['C언어', '자바', '파이썬']
  const selectedTag = ref<string | null>(null)
  const currentTab = ref<'mentoring' | 'review'>('review')
  const router = useRouter()
  
  function goToMentoring() {
    currentTab.value = 'mentoring'
    router.push('/matching')
  }
  
  function toggleTag(tag: string) {
    selectedTag.value = selectedTag.value === tag ? null : tag
  }
  
  const commentData = [
    {
      title: '훌륭한 강의였습니다!',
      name: '한로로',
      mentor: '홍길동',
      text: '훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요! 훌륭한 강의였습니다! 기초부터 탄탄하게 다르쳐 주셔서 이해를 확실하게 할 수 있었습니다. 또 한번 강의를 듣고 싶네요!',
      img: 'https://randomuser.me/api/portraits/women/85.jpg',
      tags: ['C언어'],
    },
    {
      title: '정말 유익했어요.',
      name: '강아지',
      mentor: '이순신',
      text: '놀이터',
      img: 'https://randomuser.me/api/portraits/women/86.jpg',
      tags: ['자바'],
    },
    {
      title: '고양이도 좋아하는 수업',
      name: '고양이',
      mentor: '강감찬',
      text: '캣타워',
      img: 'https://randomuser.me/api/portraits/women/87.jpg',
      tags: ['파이썬'],
    },
  ]
  
  const filteredCards = computed(() => {
    if (!selectedTag.value) return commentData
    return commentData.filter(card => card.tags?.includes(selectedTag.value as string))
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
  