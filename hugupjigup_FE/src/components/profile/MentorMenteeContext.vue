<template>
  <v-card class="mentor-mentee-card" elevation="2">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text style="height: 200px; overflow-y: auto;">
      {{ text }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
}>();
</script>

<style scoped>
.mentor-mentee-card {
  height: 250px;
  display: flex;
  flex-direction: column;
}
</style>
