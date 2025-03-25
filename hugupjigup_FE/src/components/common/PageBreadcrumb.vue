<template>
  <v-breadcrumbs :items="breadcrumbItems">
    <template #item="{ item }">
      {{ item.title.toUpperCase() }}
    </template>
  </v-breadcrumbs>
</template>

<script setup lang="ts">
import { ref } from "vue";

const breadcrumbItems = ref([
  {
    title: "멘토링 후기",
    disabled: false,
    href: "/",
  },
]);
</script>
