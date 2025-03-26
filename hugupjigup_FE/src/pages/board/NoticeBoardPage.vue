<template>
    <div class="notice-board">
      <!-- 상단 바 -->
      <v-row align="center" class="mt-6 mb-4">
        <v-col cols="12" md="6">
          <PageBreadcrumb />
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-end align-center">
          <div class="d-flex gap-2 align-center">
            <SearchActionBar />
            <!-- 작성 버튼 클릭 시 CreateNoticePostPage로 이동 -->
          <v-btn color="primary" @click="goToCreatePost">작성</v-btn>
          </div>
        </v-col>
      </v-row>
      
      <!-- 현재 페이지의 게시글만 표시 -->
      <PostsList :posts="currentPosts" />
      
      <!-- Pagination 컴포넌트 (v-model과 length 연결) -->
      <Pagination v-model="page" :length="totalPages" class="my-4" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
  import SearchActionBar from '@/components/common/SearchActionBar.vue';
  import PostsList from '@/components/board/PostsList.vue';
  import Pagination from '@/components/common/Pagination.vue';
  
  const router = useRouter();
  // const showForm = ref(false);
  
  // 전체 공지사항 데이터 (실제 API 호출 시 데이터를 받아올 수 있음)
  const posts = ref([
    { id: 1, title: '공지사항 1', content: '첫 번째 공지사항 내용입니다.' },
    { id: 2, title: '공지사항 2', content: '두 번째 공지사항 내용입니다.' },
    { id: 3, title: '공지사항 3', content: '세 번째 공지사항 내용입니다.' },
    { id: 4, title: '공지사항 4', content: '네 번째 공지사항 내용입니다.' },
    { id: 5, title: '공지사항 5', content: '다섯 번째 공지사항 내용입니다.' },
    { id: 6, title: '공지사항 6', content: '여섯 번째 공지사항 내용입니다.' },
    { id: 7, title: '공지사항 7', content: '일곱 번째 공지사항 내용입니다.' },
    { id: 8, title: '공지사항 8', content: '여덟 번째 공지사항 내용입니다.' },
    { id: 9, title: '공지사항 9', content: '아홉 번째 공지사항 내용입니다.' },
    { id: 10, title: '공지사항 10', content: '열 번째 공지사항 내용입니다.' },
  ]);
  
  // 페이지네이션 상태 관리
  const page = ref(1);         // 현재 페이지 번호
  const itemsPerPage = ref(3); // 한 페이지당 표시할 게시글 수
  
  // 전체 페이지 수 계산
  const totalPages = computed(() => Math.ceil(posts.value.length / itemsPerPage.value));
  
  // 현재 페이지에 해당하는 게시글만 추출
  const currentPosts = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value;
    return posts.value.slice(startIndex, startIndex + itemsPerPage.value);
  });

  // 작성 버튼 클릭 시 CreateNoticePostPage로 이동
function goToCreatePost() {
  router.push({ name: 'CreateNoticePostPage' })
}
  </script>
  
  <style scoped>
  .notice-board {
    max-width: 900px;
    margin: 40px auto;
    padding: 0 16px;
  }
  </style>
  
  
  
  
  