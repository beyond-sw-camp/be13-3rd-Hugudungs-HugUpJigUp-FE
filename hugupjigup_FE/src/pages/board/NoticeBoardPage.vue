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
      <div v-if="!posts || posts.length === 0">게시글이 없습니다.</div>
      <PostsList v-else :posts="currentPosts!" />
<!--      <PostsList :posts="currentPosts!" />-->
      <!-- Pagination 컴포넌트 (v-model과 length 연결) -->
      <Pagination v-model="page" :length="totalPages" class="my-4" />
    </div>
  </template>

  <script setup lang="ts">
  import {ref, computed, onMounted, watch} from 'vue';
  import { useRouter } from 'vue-router';
  import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
  import SearchActionBar from '@/components/common/SearchActionBar.vue';
  import PostsList from '@/components/board/PostsList.vue';
  import Pagination from '@/components/common/Pagination.vue';
  import {getNoticeBoardList} from "@/usecases/notice_board_usecase";
  import type { NoticeBoard, NoticeBoardListResponseDto} from "@/domain/notice_board";

  const router = useRouter();

  const posts = ref<NoticeBoard[]>();
  const pageable = ref<NoticeBoardListResponseDto>();
  // 페이지네이션 상태 관리
  const page = ref(1);         // 현재 페이지 번호
  const itemsPerPage = ref(3); // 한 페이지당 표시할 게시글 수

  watch(page, async (newPage) => {
    page.value = newPage;
    const response = await getNoticeBoardList(page.value-1, itemsPerPage.value);
    pageable.value = response;
    posts.value = response.content;
  });

  onMounted(async () => {
    const response = await getNoticeBoardList(page.value-1, itemsPerPage.value);
    pageable.value = response;
    posts.value = response.content;
  });

  // 전체 페이지 수 계산
  const totalPages = computed(() => pageable.value?.totalPages ?? 0);

  // 현재 페이지에 해당하는 게시글만 추출
  const currentPosts = computed(() => {
    return posts.value;
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




