<template>
  <v-card
    class="mentor-mentee-card"
    elevation="2"
  >
    <div class="card-header">
      <v-card-title class="card-title">{{ title }}</v-card-title>
      <v-btn
        icon="$edit"
        class="card-button"
        size="small"
        width="44"
        height="44"
        @click="handleButtonClick"
      />
    </div>
    <v-card-text style="height: 200px; overflow-y: auto;" class="card-text">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  title: string;
  text: string;
  path: string
  isMentor: boolean;
}>();

const handleButtonClick = () => {
    router.push({ path: `/${props.path}`,
      query: { isMentor: props.isMentor ? '1' : '0' } });
};
</script>

<style scoped>
.mentor-mentee-card {
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: white; /* 배경 흰색 */
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
}

.card-title {
  color: black; /* 제목 텍스트 검은색 */
}

.card-text {
  color: black; /* 텍스트 검은색 */
}
</style>
