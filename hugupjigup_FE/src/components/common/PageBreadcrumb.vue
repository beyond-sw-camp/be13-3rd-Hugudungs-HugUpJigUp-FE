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
    { title: 'Category', disabled: false, href: '/category' },
    { title: 'Current Page', disabled: true, href: '#' },
  ])
  </script>
  