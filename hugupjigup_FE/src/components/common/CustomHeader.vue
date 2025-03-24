<template>
  <v-card>
    <v-toolbar height="300px">
      <v-img :src="logoUrl" max-height="200" max-width="200" contain />
      <v-toolbar-title class="ml-2">
        로고 이름
      </v-toolbar-title>

      <v-tabs>
        <v-tab
          v-for="tab in tabs"
          :key="tab.name"
          :to="tab.to"
          router
          :text="tab.text"
          height="100px"
        />
      </v-tabs>
    </v-toolbar>
  </v-card>
</template>

<script setup lang="ts">
interface Tab {
  name: string;
  text: string;
  to: string;
}

interface Props {
  logoUrl: string;
  userName?: string;
  tabs: Tab[];
}

const props = defineProps<Props>();
</script>
