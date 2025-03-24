<template>
    <v-container>
      <v-row justify="center">
        <v-col
          v-for="(card, index) in currentCards"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <MatchingPostCard :card="card" />
        </v-col>
      </v-row>
  
      <v-row justify="center" class="mt-6 pagination-wrapper">
        <v-col cols="auto">
          <v-pagination
            v-model="page"
            :length="totalPages"
            :total-visible="7"
            color="primary"
            size="default"
            @update:model-value="changePage"
          />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import MatchingPostCard from '@/components/matching/MatchingPostCard.vue'
  
  interface Card {
    image: string
    title: string
    subtitle: string
    career: string
    introduction: string
  }
  
  const props = defineProps<{
    cards: Card[]
  }>()
  
  const page = ref(1)
  const itemsPerPage = 3
  
  const totalPages = computed(() => {
    return Math.ceil(props.cards.length / itemsPerPage)
  })
  
  const currentCards = computed(() => {
    const start = (page.value - 1) * itemsPerPage
    const end = start + itemsPerPage
    return props.cards.slice(start, end)
  })
  
  function changePage(newPage: number) {
    page.value = newPage
  }
  </script>
  
  <style scoped>
  .pagination-wrapper {
    min-height: 80px;
  }
  
  :deep(.v-pagination__item) {
    margin-inline: 3px !important;
  }
  </style>
  