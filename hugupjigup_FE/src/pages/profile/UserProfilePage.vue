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
                  연정
                </div>
                <div class="text-caption text-grey-lighten-1">
                  싱어송라이터, iOS 개발자
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
    subtitle: "31",
    path: "myposts"
  },
  {
    title: "댓글",
    subtitle: "14",
    path: "mycomments"
  },
  {
    title: "멘토링",
    subtitle: "21",
    path: "mymentorings"
  },
  {
    title: "후기",
    subtitle: "18",
    path: "mymentees"
  },
]);

const mentorMenteeInfo = ref<ContextDto[]>([
  {
    title: "멘토",
    text: `서투른 낙서 같은 나에게 물어봐
따뜻할 순 없었겠냐고
사랑을 속삭일 수는 없냐고
날이 서있는 나의 말들에
그림자 없이 숨겨진 맘
날이 저물고 어둠이 깔릴 때
비로소 드러나는 빨간 진심들
아- 사실 전하고 싶은
나의 말은 그게 아냐
아- 사무치게 빛나는
너를 바라보며 나를 탓하고 마네
사랑은 모르고 미움만 알듯이
괜히 투정 부린 날 보면서
사랑을 외치고 미움은 던지고
헝클어진 맘을 내려놓으라 하네
아- 사실 전하고 싶은
나의 말은 그게 아냐
아- 사무치게 빛나는
너를 바라보며 나를 탓하고 마네
삶의 이유인 너를 잊은 채
흐려진 생각들로 너에게
남겨둔 건 쓰디쓴 말뿐이야
사실 전하고 싶은 나의 말은 그게 아냐
아- 사무치게 빛나는
너를 바라보며 나를 탓하고 마네`,
    path: 'updatementor',
  },
  {
    title: "멘티",
    text: `그땐 생각지도 못했던 내가 여기 있지
이제 와 돌이켜보면 코웃음만 지어지는
그때 아무리 진하게 칠해진 슬픔이어도
흐르는 시간 속에선 모두 흘러 녹아내려
멈출 수 없는 이 순간들이 모인 물결을 따라가
이젠 알겠어 그 어떤 기억들도 그 모든 순간들도
오 영원한 건 없어 언젠가 스며들어 내게 남아
수많은 순간들 그 속에서 헤엄치는 우리
수영은 못하기에 더욱 큰 몸짓으로 첨벙거리네
이젠 알겠어 그 어떤 기억들도 그 모든 순간들도
오 영원한 건 없어 언젠가 스며들어 내게 남아
끝없이 흐르는 순간 속에도
오직 너를 위한 사랑을 놓치진 마 더 이상은
이젠 알겠어 그 어떤 기억들도 그 모든 순간들도
오 영원한 건 없어 언젠가 스며들어 내게 남아`,
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
