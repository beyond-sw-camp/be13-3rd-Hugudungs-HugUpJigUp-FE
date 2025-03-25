<template>
  <v-dialog v-model="dialog" width="80vw">
    <v-card class="mentoring-card" color="white" style="position: relative; width: 100%;">
      <!-- 닫기 버튼 -->
      <v-icon
        icon="mdi-close"
        class="text-black"
        style="position: absolute; top: 12px; right: 12px; cursor: pointer;"
        @click="dialog = false"
      />

      <v-card-text>
        <!-- 제목 -->
        <v-text-field
          label="멘토링 제목"
          outlined
          class="title-field"
          color="black"
        />

        <!-- 멘토 정보 -->
        <div class="mentor-section">
          <aside class="mentor-image-container">
            <v-img :src="mentor.image" class="mentor-image" contain />
          </aside>
          <div class="mentor-info-container">
            <div class="mentor-name">{{ mentor.name }}</div>
            <div class="mentor-details">
              <div class="mentor-info-text">경력: {{ mentor.career }}</div>
              <div class="mentor-info-text">현직: {{ mentor.currentPosition }}</div>
            </div>
            <v-textarea
              label="멘토 프로필"
              outlined
              rows="3"
              class="profile-textarea"
              color="black"
            />
          </div>
        </div>

        <!-- 내용 -->
        <v-textarea
          label="내용을 입력해주세요."
          outlined
          rows="5"
          class="content-textarea"
          color="black"
        />

        <!-- 버튼 -->
        <v-btn block color="black" class="submit-button" @click="submitMentoring">
          멘토링 작성하기
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
const dialog = defineModel<boolean>('dialog')

const mentor = {
  image: 'https://randomuser.me/api/portraits/women/85.jpg',
  name: '연정',
  career: '3년차',
  currentPosition: '가수',
}

const submitMentoring = () => {
  alert('멘토링이 작성되었습니다!')
}
</script>

<style scoped>
.mentoring-card {
  padding: 24px;
  border-radius: 10px;
  width: 100%;
  background-color: white;
  color: #333;
  overflow: hidden;
}

.title-field {
  margin-bottom: 16px;
}

.mentor-section {
  display: flex;
  margin-top: 16px;
}

.mentor-image-container {
  flex-basis: 22%;
  flex-shrink: 0;
}

.mentor-image {
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.mentor-info-container {
  flex-basis: 78%;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
}

.mentor-name {
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 4px;
  color: #111;
}

.mentor-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mentor-info-text {
  font-size: 1em;
  color: #444;
}

.profile-textarea,
.content-textarea {
  margin-top: 16px;
  color: #222;
}

.submit-button {
  margin-top: 20px;
}
</style>
