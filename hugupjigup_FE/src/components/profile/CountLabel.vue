<template>
  <v-card
    @click="navigateToPage"
    class="clickable-card"
    width="150"
    height="100"
    color="#1e293b"
    dark
  >
    <v-card-text class="d-flex flex-column align-center justify-center pa-2">
      <div class="text-h5 font-weight-bold text-center">{{ title }}</div>
      <div class="text-subtitle-2 mt-3">{{ subtitle }}</div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

// props 정의
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
});

const router = useRouter();

const navigateToPage = () => {
  router.push('/posts');
};
</script>

<style scoped>
.clickable-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.clickable-card:hover {
  transform: scale(1.05);
}
</style>
