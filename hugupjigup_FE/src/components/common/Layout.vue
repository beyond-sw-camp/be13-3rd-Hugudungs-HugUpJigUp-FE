<template>
  <CustomHeader 
    :logo-url="logoUrl" 
    :tabs="tabs" 
  />
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import CustomHeader from "./CustomHeader.vue";

const logoUrl = ref(
  "https://pplx-res.cloudinary.com/image/upload/v1742541836/user_uploads/nzWYGOksuTxrPOM/image.jpg"
);

const tabs = ref([
  {
    name: "notice",
    text: "공지 사항",
    to: "/notice",
  },
  {
    name: "freeboard",
    text: "자유 게시판",
    to: "/free",
  },
  {
    name: "matching",
    text: "매칭 게시판",
    to: "/matching",
  },
  {
    name: "profile",
    text: "프로필",
    to: "/profile",
  },
]);

onMounted(async () => {
  try {
    // 사용자 정보를 가져오는 API 호출
    const response = await fetch("/api/user");
    const data = await response.json();
  } catch (error) {
    console.error("사용자 정보 가져오기 오류:", error);
    // 에러 처리 (예: 사용자 이름 초기화, 에러 메시지 표시 등)
  }
});
</script>
