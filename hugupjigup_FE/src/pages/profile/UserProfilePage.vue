<template>
  <v-app>
    <v-container
      fluid
      class="pa-1"
      style="
        background-color: #1e293b;
        display: flex;
        align-items: center;
        height: fit-content;
        justify-content: center;
      "
    >
      <v-card
        elevation="6"
        rounded="lg"
        class="mx-auto"
        max-width="1000px"
        width="100%"
        style="height: fit-content;"
      >
        <v-card-text>
          <v-row align="center">
            <v-col
              cols="12"
              md="4"
              class="text-center"
            >
              <v-avatar
                size="150"
                color="grey-darken-1"
              >
                <v-img
                  src="https://randomuser.me/api/portraits/women/85.jpg"
                />
              </v-avatar>
              <div class="mt-2">
                <div class="text-h6 font-weight-bold">
                  {{ userState.user?.nickname ?? 'Nick Name' }}
                </div>
                <div class="text-caption text-grey-lighten-1">
                  {{ `${userState.user?.currentJob ?? '현재 직무를 입력해 주세요.'} / ${userState.user?.desiredJob ?? '희망 직무를 입력해 주세요.'}` }}
                </div>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="8"
              style="height: fit-content;"
            >
              <v-row>
                <v-col
                  v-for="(item, index) in postsCount"
                  :key="index"
                  style="height: fit-content;"
                  cols="6"
                  md="3"
                >
                  <CountLabel
                    :title="item.title"
                    :subtitle="item.subtitle"
                    :path="item.path"
                  />
                </v-col>
              </v-row>

              <v-row
                justify="end"
                class="mt-4"
              >
                <v-col cols="auto">
                  <v-btn
                    color="error"
                    rounded="pill"
                    prepend-icon="mdi-logout"
                    @click="doLogout"
                  >
                    Log out
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn
                    color="primary"
                    rounded="pill"
                    prepend-icon="mdi-pencil"
                    @click="navigateToUpadateProfile"
                  >
                    Edit
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              v-for="(item, index) in mentorMenteeInfo"
              :key="index"
              cols="12"
              md="6"
              style="height: fit-content;"
            >
              <MentorMenteeContext
                :title="item.title"
                :text="item.text"
                :path="item.path"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import CountLabel from "@/components/profile/CountLabel.vue";
import MentorMenteeContext from "@/components/profile/MentorMenteeContext.vue";
import router from "@/router";
import {logout} from "@/usecases/user_usecase";
import { userPinia } from "@/states/user_pinia";

const userState = userPinia();

onMounted(async () => {
  await userState.initUser();
});

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

const postsCount = ref<CardData[]>([
  {
    title: "게시글",
    subtitle: (userState.user?.postCount  ?? 0).toString(),
    path: "myposts"
  },
  {
    title: "댓글",
    subtitle: (userState.user?.commentCount  ?? 0).toString(),
    path: "mycomments"
  },
  {
    title: "멘토링",
    subtitle: (userState.user?.matchingCount  ?? 0).toString(),
    path: "mymentorings"
  },
  {
    title: "후기",
    subtitle:(userState.user?.matchingCommentCount  ?? 0).toString(),
    path: "mymentees"
  },
]);

const mentorMenteeInfo = ref<ContextDto[]>([
  {
    title: "멘토",
    text: userState.user?.mentorProfile.introduction ?? '멘토 자기소개를 입력해 주세요.',
    path: 'updatementor',
  },
  {
    title: "멘티",
    text: userState.user?.menteeProfile.introduction ?? '멘티 자기소개를 입력해 주세요.',
    path: 'updatementee',
  },
]);

const doLogout = async () => {
  const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");

  if (confirmLogout) {
    const response = await logout();
    if (response) {
      router.replace('/login');
    } else {
      alert('로그아웃에 실패했습니다.');
    }
    // router.push(`/logout`);
  }
};

const navigateToUpadateProfile = () => {
  router.push('/update-profile')
}

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

/* 프로필 이미지 */
.v-avatar {
  border: 3px solid #64748b;
}

/* 통계 정보 카드 */
.v-card--outlined {
  border-color: #64748b;
}

/* 버튼 */
.v-btn {
  text-transform: none;
}
</style>
