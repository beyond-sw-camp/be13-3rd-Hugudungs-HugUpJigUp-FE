<template>
  <v-dialog v-model="dialog" width="80vw" scrollable>
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
          class="custom-input"
          variant="outlined"
          density="compact"
          placeholder="멘토링 제목"
        />

        <!-- 멘토 정보 -->
        <div class="mentor-section">
          <aside class="mentor-image-container">
            <v-img :src="mentor.image" class="mentor-image" contain />
          </aside>

          <div class="mentor-info-container">
            <!-- 이름 + 태그 같은 줄 -->
            <div class="mentor-header">
              <div class="mentor-name">{{ mentor.name }}</div>
              <div class="mentor-tags-inline">
                <v-chip
                  v-for="tag in tags"
                  :key="tag"
                  class="tag-chip"
                  color="black"
                  variant="flat"
                  size="small"
                  label
                >
                  <v-icon start size="16">mdi-check</v-icon>
                  {{ tag }}
                </v-chip>
              </div>
            </div>

            <!-- 경력 및 직업 -->
            <div class="mentor-details">
              <div class="mentor-info-text">경력: {{ mentor.career }}</div>
              <div class="mentor-info-text">현직: {{ mentor.currentPosition }}</div>
            </div>

            <!-- 프로필 작성 -->
            <v-textarea
              class="custom-input"
              variant="outlined"
              density="compact"
              rows="2"
              placeholder="멘토 프로필"
            />
          </div>
        </div>

        <!-- 내용 입력 -->
        <v-textarea
          class="custom-input"
          variant="outlined"
          density="compact"
          rows="3"
          placeholder="내용을 입력해주세요."
        />

        <!-- 작성 버튼 -->
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

const tags = ['가수', '작곡가', '엔터테인먼트']

const submitMentoring = () => {
  alert('멘토링이 작성되었습니다!')
}
</script>

<style scoped>
.mentoring-card {
  padding: 12px;
  border-radius: 10px;
  width: 100%;
  background-color: white;
  color: #333;
  max-height: 85vh;
  overflow-y: auto;
}

.custom-input {
  margin-top: 12px;
  --v-input-control-height: auto;
}

/* Vuetify 기본 테두리 제거 + 커스텀 테두리 적용 */
:deep(.v-field__outline) {
  border-color: transparent !important;
}

:deep(.v-field__outline::before),
:deep(.v-field__outline::after) {
  border: none !important;
  box-shadow: none !important;
}

:deep(.v-field) {
  border: 1px solid #c8c8c8 !important;
  border-radius: 10px !important;
  background-color: white !important;
  box-shadow: none !important;
}

:deep(.v-input),
:deep(.v-input:hover),
:deep(.v-field),
:deep(.v-field:hover),
:deep(.v-field:focus-within) {
  border: none !important;
  box-shadow: none !important;
}

/* 텍스트 색상 */
:deep(.v-input input),
:deep(.v-input textarea),
:deep(.v-field__input) {
  color: #000 !important;
  background-color: transparent !important;
}

/* 플레이스홀더 색상 */
:deep(.v-field__input::placeholder),
:deep(input::placeholder),
:deep(textarea::placeholder),
:deep(.v-input input::placeholder),
:deep(.v-input textarea::placeholder) {
  color: #d3d3d3 !important;
  opacity: 1 !important;
}

/* 멘토 구조 스타일 */
.mentor-section {
  display: flex;
  margin-top: 10px;
}

.mentor-image-container {
  flex-basis: 18%;
  flex-shrink: 0;
}

.mentor-image {
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
}

.mentor-info-container {
  flex-basis: 82%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

/* 이름 + 태그 라인 */
.mentor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.mentor-name {
  font-size: 1.2em;
  font-weight: bold;
  color: #111;
}

.mentor-tags-inline {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag-chip {
  font-size: 13px;
  color: white;
  border-radius: 8px;
  height: 28px;
  padding: 0 8px;
}

.mentor-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mentor-info-text {
  font-size: 0.95em;
  color: #444;
}

.submit-button {
  margin-top: 12px;
}
</style>
