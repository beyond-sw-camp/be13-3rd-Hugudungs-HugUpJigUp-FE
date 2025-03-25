<template>
  <div class="card-grid">
    <div class="card" v-for="(card, index) in cardData" :key="index">
      <div class="card-title">{{ card.title }}</div>
      <div class="card-content">
        <div class="avatar-container">
          <img :src="card.avatar" alt="avatar" class="avatar" />
        </div>
        <div class="text-content">
          <div class="subtitle">{{ card.subtitle }}</div>
          <div class="mentoring">멘토링 : {{ card.text1 }} / {{ card.text2 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CardGrid',
  setup() {
    const cardData = ref([
      {
        title: '그럼에도 불구하고 사랑하게 될거야',
        subtitle: '한로로',
        text1: '가수',
        text2: '머피의 법칙',
        avatar: 'https://randomuser.me/api/portraits/women/85.jpg',
      },
      {
        title: '그럼에도 불구하고 또 사랑하게 될거야',
        subtitle: '강아지',
        text1: '공원',
        text2: '놀이터',
        avatar: 'https://randomuser.me/api/portraits/women/86.jpg',
      },
      {
        title: '나는 고양이가 좋아',
        subtitle: '고양이',
        text1: '캣타워',
        text2: '박스',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      },
    ])

    return {
      cardData,
    }
  },
})
</script>

<style>
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 16px;
  justify-content: center;
}

.card {
  background-color: #fff;
  border: 1.5px solid #ddd;
  border-radius: 10px;
  padding: 32px 24px; /* 상하 크게, 좌우 좁게 */
  width: 400px; /* 좌우 폭 줄임 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 16px;
  text-align: left;
}

.card-content {
  display: flex;
  align-items: center;
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.text-content {
  padding-left: 16px;
}

.subtitle {
  font-size: 1rem;
  font-weight: 700;
  color: #555; /* 진한 회색 */
  margin-bottom: 4px;
}

.mentoring {
  font-size: 0.875rem;
  color: #888; /* 연한 회색 */
}
</style>
