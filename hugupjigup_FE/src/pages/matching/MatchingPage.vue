<template>
    <v-container fluid class="px-6">
    
      <!-- 상단 바 -->
      <v-row align="center" class="mt-6 mb-4">
        <v-col cols="12" md="6">
          <PageBreadcrumb />
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-end align-center">
          <div class="d-flex gap-2 align-center">
            <SearchActionBar />
            <v-btn color="primary" @click="showForm = true">작성</v-btn>
          </div>
        </v-col>
      </v-row>
  
      <!-- 카드 리스트 + 페이지네이션 -->
      <v-card class="pa-6 match-card-container" elevation="3" color="white">
        <MatchingPagination :cards="cardData" />
      </v-card>
  
      <!-- 작성 팝업 -->
      <CreateMatchingForm v-model:dialog="showForm" />
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue'
  import SearchActionBar from '@/components/common/SearchActionBar.vue'
  import MatchingPagination from '@/components/common/MatchingPagination.vue'
  import CreateMatchingForm from '@/components/matching/CreateMatchingForm.vue'
  
  const showForm = ref(false)
  
  const cardData = [
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
      subtitle: 'ㅈㅣㅂ',
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
  ]
  </script>
  
  <style scoped>
  .match-card-container {
    background-color: white;
    border-radius: 12px;
    width: 100%;
  }
  </style>
  