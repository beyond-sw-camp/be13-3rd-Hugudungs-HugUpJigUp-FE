<template>
  <v-app>
    <v-container
      fluid
      class="pa-1"
      style="
        background-color: #1e293b;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <v-card
        elevation="6"
        rounded="lg"
        class="mx-auto"
        max-width="1200px"
        color="white"
        width="100%"
        style="height: fit-content;"
      >
        <v-card-text>
          <!-- 상단: 게시글, 댓글, 이미지, 자기소개 -->
          <v-row align="stretch" justify="center" no-gutters spacing="4">
            <!-- 왼쪽: 게시글 & 댓글 -->
            <v-col cols="2" class="px-1">
              <CountLabel 
                :title="postsCount[0].title" 
                :subtitle="postsCount[0].subtitle" 
                :path="postsCount[0].path" 
              />
            </v-col>
            <v-col cols="2" class="px-1">
              <CountLabel 
                :title="postsCount[1].title" 
                :subtitle="postsCount[1].subtitle" 
                :path="postsCount[1].path" 
              />
            </v-col>

            <!-- 중앙: 프로필 이미지 & 자기소개 -->
            <v-col cols="2" class="px-1 text-center">
              <v-avatar size="150" class="profile-avatar">
                <v-img src="https://randomuser.me/api/portraits/women/85.jpg" />
              </v-avatar>
              <div class="mt-2">
                <!-- '연정' 텍스트 크기 및 굵기 증가 -->
                <div class="text-name">{{ name }}</div>
                <!-- '싱어송라이터'와 'iOS 개발자' 텍스트 크기 및 회색 색상으로 변경 -->
                <div class="text-description">{{ description1 }}</div>
                <div class="text-description">{{ description2 }}</div>
              </div>
            </v-col>

            <!-- 오른쪽: 멘토링 & 후기 -->
            <v-col cols="2" class="px-1">
              <CountLabel 
                :title="postsCount[2].title" 
                :subtitle="postsCount[2].subtitle" 
                :path="postsCount[2].path" 
              />
            </v-col>
            <v-col cols="2" class="px-1">
              <CountLabel 
                :title="postsCount[3].title" 
                :subtitle="postsCount[3].subtitle" 
                :path="postsCount[3].path" 
              />
            </v-col>
          </v-row>

          <!-- 하단: 로그아웃 & 프로필 수정 버튼 -->
          <v-row justify="end" align="center" class="mt-4" spacing="4">
            <v-col cols="auto">
              <v-btn color="rgb(255,0,0)" rounded="pill" prepend-icon="mdi-logout" @click="doLogout">
                Log out
              </v-btn>
            </v-col>
            <v-col cols="auto">
              <v-btn color="rgb(0,0,255)" rounded="pill" prepend-icon="mdi-pencil" @click="navigateToUpdateProfile">
                Edit
              </v-btn>
            </v-col>
          </v-row>

          <!-- 멘토 / 멘티 정보 -->
          <v-row no-gutters spacing="6" class="mt-4">
            <!-- 멘토 정보 -->
            <v-col cols="6" class="px-1 mentor-col">
              <MentorMenteeContext 
                :title="mentorMenteeInfo[0].title" 
                :text="mentorMenteeInfo[0].text" 
                :path="mentorMenteeInfo[0].path" 
              />
            </v-col>


            <!-- 멘티 정보 -->
            <v-col cols="6" class="px-1 mentee-col">
              <MentorMenteeContext 
                :title="mentorMenteeInfo[1].title" 
                :text="mentorMenteeInfo[1].text" 
                :path="mentorMenteeInfo[1].path" 
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CountLabel from "@/components/profile/CountLabel.vue";
import MentorMenteeContext from "@/components/profile/MentorMenteeContext.vue";
import router from "@/router";

interface CardData {
  title: string;
  subtitle: string;
  path: string;
}

interface ContextDto {
  title: string;
  text: string;
  path: string;
}

// 데이터 바인딩을 위한 변수 선언
const name = ref('연정');
const description1 = ref('싱어송라이터');
const description2 = ref('iOS 개발자');

const postsCount = ref<CardData[]>([
  { title: "작성한 게시글", subtitle: "31", path: "myposts" },
  { title: "작성한 댓글", subtitle: "14", path: "mycomments" },
  { title: "멘토링 개설", subtitle: "21", path: "mymentorings" },
  { title: "멘티 참여", subtitle: "18", path: "mymentees" },
]);

const mentorMenteeInfo = ref<ContextDto[]>([
  { title: "멘토", text: "서투른 낙서 같은 나에게 물어봐 ...", path: "updatementor" },
  { title: "멘티", text: "그땐 생각지도 못했던 내가 여기 있지 ...", path: "updatementee" },
]);

const doLogout = () => {
  const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
  if (confirmLogout) {
    router.push(`/logout`);
  }
};

const navigateToUpdateProfile = () => {
  router.push('/updateprofile');
};
</script>

<style scoped>
/* 전체 배경색 */
.v-application {
  background-color: #1e293b;
  min-width: 100px;
}

/* 카드 그림자 */
.v-card {
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
}

/* 텍스트 색상 */
.text-h6,
.text-caption {
  color: #e2e8f0;
}

/* 프로필 이미지 - 테두리 제거 및 그림자 추가 */
.v-avatar {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); /* 그림자 효과 추가 */
}

/* 버튼 */
.v-btn {
  text-transform: none;
}

/* 멘토 정보 */
.mentor-col {
  padding: 100px; /* padding 적용 */
  box-shadow: none; /* shadow 제거 */
}

/* 멘티 정보 */
.mentee-col {
  padding: 16px; 
  /* padding 적용 */
  box-shadow:none /* shadow 제거 */
}

/* '연정' 이름 텍스트 크기 및 굵기 */
.text-name {
  font-size: 2rem;  /* 텍스트 크기 */
  font-weight: bold; /* 굵게 */
  color: black; /* 검은색 */
}

/* '싱어송라이터'와 'iOS 개발자' 설명 텍스트 크기 및 색상 */
.text-description {
  font-size: 1.00rem;  /* 텍스트 크기 */
  font-weight: bold; /* 굵게 */
  color: #6b7280; /* 회색 색상 */
}
</style>
