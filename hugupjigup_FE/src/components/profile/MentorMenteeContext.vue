<template>
  <v-card 
    class="mentor-mentee-card" 
    elevation="2"
  >
    <div class="card-header">
      <v-card-title>{{ title }}</v-card-title>
      <v-btn 
        icon="$edit"
        class="card-button" 
        size="small" 
        width="44" 
        height="44" 
        @click="handleButtonClick"
      />
    </div>
    <v-card-text style="height: 200px; overflow-y: auto;">
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
  path: string;
}>();

const handleButtonClick = () => {
    router.push(`/${props.path}`);
};

</script>

<style scoped>
.mentor-mentee-card {
  height: 250px;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
}
</style>