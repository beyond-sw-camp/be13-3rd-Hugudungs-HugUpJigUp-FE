<template>
    <v-dialog v-model="dialog" max-width="1000">
      <template #activator="{ props }">
        <v-btn color="primary" v-bind="props">자세히 보기 (팝업 확인용)</v-btn>
      </template>
  
      <v-card color="white" class="pa-4" style="position: relative;">
        <!-- 닫기 버튼 -->
        <v-icon
          icon="mdi-close"
          class="text-black"
          style="position: absolute; top: 16px; right: 16px; cursor: pointer;"
          @click="dialog = false"
        />
  
        <!-- 태그 -->
        <v-chip
          class="bg-black text-white"
          size="small"
          style="position: absolute; top: 56px; right: 16px; z-index: 1; border-radius: 6px;"
        >
          <v-icon start size="16" class="text-white">mdi-check</v-icon>
          {{ tag }}
        </v-chip>
  
        <!-- 제목 -->
        <v-card-title class="text-h6 font-weight-bold pb-2">
          {{ title }}
        </v-card-title>
  
        <!-- 본문 내용 -->
        <v-card-text class="py-2">
            <v-row align="center">
                <!-- 프로필 이미지 -->
                <v-col cols="12" sm="3" class="d-flex align-center">
                    <div
                    style="
                        width: 140px;
                        height: 140px;
                        border-radius: 50%;
                        overflow: hidden;
                        margin-left: -12px;
                    "
                    >
                    <v-img
                        :src="image"
                        cover
                        width="100%"
                        height="100%"
                    />
                    </div>
                </v-col>

                <!-- 텍스트 내용 -->
                <v-col cols="12" sm="9" class="pt-0">
                    <div class="text-h5 font-weight-bold mb-2">{{ name }}</div>

                    <div class="mb-1">
                    <strong>경력:</strong>
                    <span class="text-grey-darken-1">{{ experience }}</span>
                    </div>

                    <div class="mb-3">
                    <strong>현직:</strong>
                    <span class="text-grey-darken-1">{{ position }}</span>
                    </div>

                    <div class="text-grey-darken-1" style="white-space: pre-line;">
                    {{ shortIntro }}
                    </div>
                </v-col>
            </v-row>
  
          <v-divider class="my-4" />
  
          <!-- 경력 상세 -->
          <div class="mb-4">
            <div class="font-weight-medium mb-1">• 경력</div>
            <div class="text-grey-darken-1">{{ careerDetail }}</div>
          </div>
  
          <!-- 자기소개 상세 -->
          <div>
            <div class="font-weight-medium mb-1">• 자기소개</div>
            <div class="text-grey-darken-1" style="white-space: pre-line;">
              {{ selfIntro }}
            </div>
          </div>
        </v-card-text>
  
        <!-- 하단 버튼 -->
        <v-card-actions>
          <v-btn block class="bg-black text-white" @click="applyMentoring">
            멘토링 신청하기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const dialog = ref(false)
  
  const title = ref('머피의 법칙(Rock ver)')
  const tag = ref('가수')
  const name = ref('연정')
  const experience = ref('3년차')
  const position = ref('가수')
  const image = ref('https://randomuser.me/api/portraits/women/45.jpg')
  
  const shortIntro = ref(`서경대에 재학하며 기타 세션으로 활동했다. 홍대에서 공연을 하고 유튜브에도 출연하며 대학 생활을 했다.
  자작곡 ‘머피의 법칙’, ‘놀이터’ 등을 사운드클라우드에 올리며 싱어송라이터로서 활동 중.`)
  
  const careerDetail = ref('그로이 엔터테인먼트')
  
  const selfIntro = ref(`초등학교 5학년 때 드럼을 치는 모습이 멋있어 보여서 음악학원에서 드럼을 배우다가,
  통기타를 메고 다니는 모습이 멋있어 보여서 통기타를 배웠다. 그 후 일렉기타를 치는 모습이 멋있어 보여서 일렉으로 갈아탔다.`)
  
  const applyMentoring = () => {
    alert('멘토링 신청 완료! (기능 미구현)')
  }
  </script>
  