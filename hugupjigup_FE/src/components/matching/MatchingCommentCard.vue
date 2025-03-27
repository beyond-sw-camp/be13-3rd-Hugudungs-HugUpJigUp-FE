<template>
  <div class="comment-card" @click="openDialog">
    <div class="comment-title">{{ title }}</div>
    <div class="comment-content">
      <img :src="img" alt="avatar" class="avatar" />
      <div class="text-box">
        <div class="name">{{ name }}</div>
        <div class="subtext">
          멘토링: {{ mentor }}<br />
          {{ text }}
        </div>
      </div>
    </div>

    <!-- 팝업 -->
    <div class="dialog-backdrop" v-if="dialog" @click="onBackdropClick">
      <div class="dialog-box" @click.stop>
        <div class="close-button" @click="closeDialog">×</div>

        <div class="dialog-title">{{ title }}</div>

        <div class="dialog-content">
          <img :src="img" alt="avatar" class="avatar" />
          <div class="text-box">
            <div class="name">{{ name }}</div>
            <div class="subtext">
              멘토링: {{ mentor }}
              {{ text }}
            </div>
          </div>
        </div>

        <div class="tag-container" v-if="tags.length">
          <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)

function openDialog() {
  dialog.value = true
}
function closeDialog() {
  dialog.value = false
}

function onBackdropClick() {
  closeDialog()
}

defineProps({
  title: { type: String, default: '기본 제목' },
  name: { type: String, default: '기본 이름' },
  mentor: { type: String, default: '기본 멘토' },
  text: { type: String, default: '기본 텍스트' },
  img: { type: String, default: 'https://via.placeholder.com/50' },
  tags: {
    type: Array as () => string[],
    default: () => [],
  },
})
</script>

<style scoped>
.comment-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.comment-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  margin-bottom: 12px;
}

.comment-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.text-box {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: bold;
  color: #333;
}

.subtext {
  font-size: 0.9rem;
  color: #666;
}

.dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-title {
  font-weight: bold;
  font-size: 1.3rem;
}


.close-button:hover {
  color: #000;
}

.dialog-content {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 12px;
}

.tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}

.tag {
  background-color: #000;
  color: white;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.8rem;
}

/* 기존 .subtext 유지 - 카드에만 적용 */
.subtext {
  font-size: 0.9rem;
  color: #666;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  height: 2.8em;
}

.dialog-box .subtext::-webkit-scrollbar {
  width: 6px;
}
.dialog-box .subtext::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 8px;
}
</style>

<style>
/* 팝업 박스: 위아래로 더 크게 */
.dialog-box {
  background: white;
  border-radius: 12px;
  padding: 24px;
  max-width: 600px;
  max-height: 95vh;  /* 거의 전체 화면 높이까지 확장 */
  width: 90%;
  position: relative;
  overflow-y: auto;
}

/* 텍스트 영역: 더 많은 줄을 보여줌 */
.dialog-box .subtext {
  display: block;
  min-height: 240px;   /* 300px → 480px (2배 가까이) */
  overflow-y: auto;
  white-space: pre-wrap;
  line-height: 1.6;
  font-size: 15px;
  padding-right: 8px;
  margin-top: 6px;
}

.close-button {
  position: absolute;
  top: 4px;
  right: 16px;
  font-size: 32px; /* 또는 40px, 원하는 크기 */
  font-weight: bold;
  cursor: pointer;
  color: #333;
  user-select: none;
  z-index: 10;
}
</style>