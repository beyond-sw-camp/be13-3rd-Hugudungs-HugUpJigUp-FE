<template>
    <v-breadcrumbs :items="breadcrumbItems">
      <template v-slot:title="{ item }">
        {{ item.title.toUpperCase() }}
      </template>
    </v-breadcrumbs>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import type { BreadcrumbItem } from 'vuetify/lib/components/VBreadcrumbs/VBreadcrumbs'
  
  const breadcrumbItems = ref<BreadcrumbItem[]>([
    { title: 'Home', disabled: false, href: '/' },
    // notice 게시판 페이지 만드는 사람이 경로 /notice로 해주시면 될거 같습니다.
    { title: 'Notice', disabled: false, href: '/notice' },
    { title: 'Current Page', disabled: true, href: '#' },
  ])
  </script>
  