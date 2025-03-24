<template>
    <v-app>
      <v-container>
        <v-card>
          <!-- 대제목 -->
          <div class="main-title">{{ title }}</div>
  
          <div class="profile-container">
            <!-- 첫 번째 섹션 -->
            <div class="profile-section">
              <v-avatar size="80" class="mr-3">
                <v-img :src="profileImage" alt="프로필 이미지" aspect-ratio="1"></v-img>
              </v-avatar>
              <div class="profile-info">
                <div class="profile-name">{{ name }}</div>
                <div class="profile-details">
                  경력: {{ career }}<br>
                  현직: {{ job }}
                </div>
                <div class="profile-description-short">
                  {{ descriptionShort }}
                </div>
              </div>
            </div>
  
            <!-- 두 번째 섹션 -->
            <div class="info-section">
              <div class="info-container">
                <div class="career-title">● 경력</div>
                <div class="profile-career">{{ careerDetail }}</div>
              </div>
              <div class="info-container">
                <div class="description-title">● 자기소개</div>
                <div class="profile-description">
                  {{ description }}
                </div>
              </div>
            </div>
          </div>
  
          <!-- 버튼 추가 -->
          <div class="button-container">
            <v-btn class="accept-button" @click="accept">수락</v-btn>
            <v-btn class="reject-button" @click="reject">거절</v-btn>
          </div>
        </v-card>
      </v-container>
    </v-app>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'ProfileComponent',
    setup() {
      const title = ref('머피의 법칙(Rock ver)');
      const profileImage = ref('https://picsum.photos/id/1028/80/80');
      const name = ref('한로로');
      const career = ref('3년차');
      const job = ref('가수');
      const descriptionShort = ref("'한로로'라는 예명은 고등학교 수학 교육과정 중 지수와 로그범위 때문에 학창 시절 때 본명인 한지수 대신 한로그라고 불렸는데, 그래서 활동도 '한로그'로 하려 했으나 너무 수학적으로 다가올 것 같다며 동글동글한 느낌으로 한로로로 지었다고 한다.");
      const careerDetail = ref('어센틱');
      const description = ref("그냥 단순히 음악을 하고 싶어했었던 한로로는 인스타그램을 하다가 자연스럽게 '초승'이라는 아티스트의 뮤직비디오를 보고 뮤직비디오의 분위기에 매료되어 당시 음악을 배워나가고 싶다는 마음으로 Studio MOS에 연락하게 되었다.");
  
      const accept = () => {
        // 수락 로직
        console.log('수락');
      };
  
      const reject = () => {
        // 거절 로직
        console.log('거절');
      };
  
      return {
        title,
        profileImage,
        name,
        career,
        job,
        descriptionShort,
        careerDetail,
        description,
        accept,
        reject,
      };
    },
  });
  </script>
  
  <style scoped>
  .main-title {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
  }
  
  .profile-container {
    padding: 20px;
  }
  
  /* 첫 번째 섹션 스타일 */
  .profile-section {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  .profile-info {
    flex: 1;
  }
  
  .profile-name {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .profile-details {
    font-size: 1rem;
    color: #555;
    margin-bottom: 10px;
  }
  
  .profile-description-short {
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 10px;
  }
  
  /* 두 번째 섹션 스타일 */
  .info-section {
    /* margin-left: 100px; Adjust the margin as needed */
  }
  
  .info-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* 좌측 정렬 */
    margin-bottom: 10px;
  }
  
  .career-title {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .description-title {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .profile-description {
    font-size: 1rem;
    line-height: 1.4;
  }
  
  /* 버튼 스타일 */
  .button-container {
    display: flex;
    justify-content: center; /* 가운데 정렬 */
    padding: 20px;
  }
  
  .accept-button {
    background-color: green;
    color: white;
    margin-right: 10px;
  }
  
  .reject-button {
    background-color: red;
    color: white;
  }
  </style>
  