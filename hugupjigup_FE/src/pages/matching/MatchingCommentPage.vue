<template>
  <div class="matching-page">
    <div class="header-container">
      <div class="left-section">
        <PageBreadcrumb :breadcrumb-items="breadcrumbItems" />
      </div>
      <div class="right-section">
        <SearchActionBar
          v-model:selected-location="selectedLocation"
          :locations="locations"
          :search-label="'검색할 내용을 입력하세요.'"
          @search="handleSearch"
        />
      </div>
    </div>
    <div v-if="paginatedComments.length === 0" class="empty-state">
      <p>표시할 후기가 없습니다.</p>
    </div>
    <div v-else class="text-center">
      <Pagination
        v-model:current-page="page"
        :length="totalPages"
        @update:current-page="handlePageChange"
        class="pagination-custom"
      >
        <template #default="{ page }">
          <v-container class="matching-container" fluid>
            <v-row justify="center">
              <v-row>
                <v-col
                  v-for="item in paginatedComments"
                  :key="item.id"
                  cols="12"
                  sm="12"
                  md="4"
                >
                  <MatchingCommentCard
                    :title="item.title"
                    :subtitle="item.subtitle"
                    :text1="item.text1"
                    :text2="item.text2"
                    :avatar="item.avatar"
                  />
                </v-col>
              </v-row>
            </v-row>
          </v-container>
        </template>
      </Pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from "vue";
import PageBreadcrumb from "@/components/common/PageBreadcrumb.vue";
import SearchActionBar from "@/components/common/SearchActionBar.vue";
import MatchingCommentCard from "@/components/matching/MatchingCommentCard.vue";
import Pagination from "@/components/common/Pagination.vue";

interface MatchingCommentDto {
  id: string;
  title: string;
  subtitle: string;
  text1: string;
  text2: string;
  avatar: string;
}

const selectedLocation = ref("제목");
const locations = ["제목", "내용", "제목 + 내용", "작성자", "전체"];
const page = ref(1); // 현재 페이지 번호
const itemsPerPage = ref(6); // 페이지당 표시할 아이템 수

const allComments = ref<MatchingCommentDto[]>([]); // 전체 데이터를 저장하는 배열
const paginatedComments = ref<MatchingCommentDto[]>([]); // 현재 페이지에 표시할 데이터

// 초기 데이터 로드 함수
async function loadInitialData() {
  try {
    // 실제 구현에서는 API 호출로 대체 가능
    allComments.value = [
      {
        id: "1",
        title:
          "그럼에도 불구하고 사랑하게 될거야 그럼에도 불구하고 사랑하게 될거야 그럼에도 불구하고 사랑하게 될거야",
        subtitle: "한로로",
        text1: "가수",
        text2: "머피의 법칙",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
      {
        id: "2",
        title: "사랑은 언제나 옳아",
        subtitle: "학생",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/83.jpg",
      },
      {
        id: "3",
        title: "가족의 소중함",
        subtitle: "가수",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/90.jpg",
      },
      {
        id: "4",
        title: "꿈을 이루는 방법",
        subtitle: "학생",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/84.jpg",
      },
      {
        id: "5",
        title: "소중한 친구들",
        subtitle: "한로로",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/80.jpg",
      },
      {
        id: "6",
        title: "음악의 힘",
        subtitle: "선생님",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/80.jpg",
      },
      {
        id: "7",
        title: "사랑은 언제나 옳아",
        subtitle: "아티스트",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/83.jpg",
      },
      {
        id: "8",
        title: "추억의 장소",
        subtitle: "고양이",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/84.jpg",
      },
      {
        id: "9",
        title: "사랑의 언어",
        subtitle: "가수",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/87.jpg",
      },
      {
        id: "10",
        title: "나는 고양이가 좋아",
        subtitle: "작가",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/90.jpg",
      },
      {
        id: "11",
        title: "나는 고양이가 좋아",
        subtitle: "고양이",
        text1: "캣타워",
        text2: "박스",
        avatar: "https://randomuser.me/api/portraits/women/87.jpg",
      },
      {
        id: "12",
        title: "소중한 친구들",
        subtitle: "학생",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/84.jpg",
      },
      {
        id: "13",
        title: "추억의 장소",
        subtitle: "한로로",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/82.jpg",
      },
      {
        id: "14",
        title: "희망의 메시지",
        subtitle: "디자이너",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/83.jpg",
      },
      {
        id: "15",
        title: "행복한 일상",
        subtitle: "학생",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/83.jpg",
      },
      {
        id: "16",
        title: "인생의 교훈",
        subtitle: "고양이",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
      {
        id: "17",
        title: "기억에 남는 여행",
        subtitle: "작가",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/83.jpg",
      },
      {
        id: "18",
        title: "희망의 메시지",
        subtitle: "가수",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
      {
        id: "19",
        title: "꿈을 이루는 방법",
        subtitle: "한로로",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/84.jpg",
      },
      {
        id: "20",
        title: "음악의 힘",
        subtitle: "선생님",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/83.jpg",
      },
      {
        id: "21",
        title: "추억의 장소",
        subtitle: "아티스트",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/84.jpg",
      },
      {
        id: "22",
        title: "기억에 남는 여행",
        subtitle: "한로로",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/81.jpg",
      },
      {
        id: "23",
        title: "그럼에도 불구하고 사랑하게 될거야",
        subtitle: "요리사",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/82.jpg",
      },
      {
        id: "24",
        title: "행복한 순간들",
        subtitle: "선생님",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/81.jpg",
      },
      {
        id: "25",
        title: "희망의 메시지",
        subtitle: "디자이너",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/86.jpg",
      },
      {
        id: "26",
        title: "나는 고양이가 좋아",
        subtitle: "학생",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/89.jpg",
      },
      {
        id: "27",
        title: "가족의 소중함",
        subtitle: "아티스트",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/81.jpg",
      },
      {
        id: "28",
        title: "행복한 일상",
        subtitle: "선생님",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/83.jpg",
      },
      {
        id: "29",
        title: "인생의 교훈",
        subtitle: "가수",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/84.jpg",
      },
      {
        id: "30",
        title: "기억에 남는 여행",
        subtitle: "고양이",
        text1: "텍스트1 내용",
        text2: "텍스트2 내용",
        avatar: "https://randomuser.me/api/portraits/women/80.jpg",
      },
    ];

    updatePageData(page.value);
  } catch (error) {
    console.error("초기 데이터 로드 중 오류 발생:", error);
  }
}

// 현재 페이지에 맞는 데이터를 업데이트하는 함수
function updatePageData(pageNumber: number) {
  const start = (pageNumber - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  paginatedComments.value = allComments.value.slice(start, end);
}

// 페이지 변경 핸들러
function handlePageChange(newPage: number) {
  page.value = newPage;
  updatePageData(newPage);
}

// 검색 핸들러 (검색 결과를 업데이트)
const handleSearch = (searchValue: string) => {
  const filteredComments = allComments.value.filter((comment) =>
    comment.title.includes(searchValue)
  );
  allComments.value = filteredComments;
  page.value = 1; // 검색 후 첫 페이지로 초기화
  updatePageData(page.value);
};

// 총 페이지 수 계산
const totalPages = computed(() => {
  return Math.ceil(allComments.value.length / itemsPerPage.value);
});

// 컴포넌트 마운트 시 초기 데이터 로드
onMounted(() => {
  loadInitialData();
});

// 페이지 변경 감시 (디버깅용)
watch(page, (newPage) => {
  console.log(`페이지 변경됨 -> 현재 페이지: ${newPage}`);
});

// Breadcrumb 아이템 정의
const breadcrumbItems = ref([
  { title: "멘토링 후기", disabled: false, href: "/" },
]);
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
}

.left-section {
  display: flex;
  align-items: center;
}

.right-section {
  display: flex;
  align-items: center;
  margin-left: auto; /* 오른쪽으로 밀어냄 */
}

/* 반응형 대응 */
@media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap; /* 필요시 줄바꿈 허용 */
    gap: 10px; /* 요소 간 간격 */
  }

  .right-section {
    width: 100%; /* 작은 화면에서는 전체 너비 사용 */
  }
}

.matching-page {
  padding: 20px;
}

.empty-state {
  font-size: 16px;
  color: #757575;
}
</style>
