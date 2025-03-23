<template>
    <v-app>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8">
            <v-card class="mentoring-card">
              <v-card-text>
                <v-text-field label="멘토링 제목" outlined class="title-field"></v-text-field>
  
                <div class="mentor-section">
                  <aside class="mentor-image-container">
                    <v-img :src="mentor.image" class="mentor-image" contain></v-img>
                  </aside>
                  <div class="mentor-info-container">
                    <div class="mentor-name">{{ mentor.name }}</div>
                    <div class="mentor-details">
                      <div class="mentor-info-text">경력: {{ mentor.career }}</div>
                      <div class="mentor-info-text">현직: {{ mentor.currentPosition }}</div>
                    </div>
                    <v-textarea label="멘토 프로필" outlined rows="4" class="profile-textarea"></v-textarea>
                  </div>
                </div>
  
                <v-textarea label="내용을 입력해주세요." outlined rows="6" class="content-textarea"></v-textarea>
  
                <v-btn block color="black" class="submit-button" @click="submitMentoring">멘토링 작성하기</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "MentoringForm",
    setup() {
      const mentor = {
        image: "https://randomuser.me/api/portraits/women/85.jpg",
        name: "연정",
        career: "3년차",
        currentPosition: "가수",
      };
  
      const submitMentoring = () => {
        alert("멘토링이 작성되었습니다!");
      };
  
      return {
        mentor,
        submitMentoring,
      };
    },
  });
  </script>
  
  <style scoped>
  .mentoring-card {
    padding: 30px; /* padding 증가 */
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 900px; /* 최대 너비 설정 */
    margin: 0 auto; /* 가운데 정렬 */
  }
  
  .title-field {
    margin-bottom: 20px;
  }
  
  .mentor-section {
    display: flex;
    margin-top: 20px;
  }
  
  .mentor-image-container {
    flex-basis: 25%; /* 이미지 영역 비율 조정 */
    flex-shrink: 0;
  }
  
  .mentor-image {
    width: 100%;
    border-radius: 50%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
  
  .mentor-info-container {
    flex-basis: 75%; /* 텍스트 영역 비율 조정 */
    margin-left: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .mentor-name {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .mentor-details {
    display: flex;
    justify-content: space-between;
  }
  
  .mentor-info-text {
    font-size: 1em;
    line-height: 1.4;
  }
  
  .profile-textarea {
    margin-top: 10px;
  }
  
  .content-textarea {
    margin-top: 20px;
  }
  
  .submit-button {
    margin-top: 20px;
  }
  </style>
  