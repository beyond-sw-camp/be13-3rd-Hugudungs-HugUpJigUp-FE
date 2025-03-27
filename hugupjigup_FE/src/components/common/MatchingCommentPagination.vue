<template>
    <v-container>
      <v-row>
        <v-col
          v-for="(card, index) in currentCards"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <MatchingCommentCard
            :title="card.title"
            :name="card.name"
            :mentor="card.mentor"
            :text="card.text"
            :img="card.img"
            :tags="card.tags"
          />
        </v-col>
      </v-row>
  
      <!-- 페이지네이션 -->
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
  import MatchingCommentCard from '@/components/matching/MatchingCommentCard.vue'
  
  interface Card {
    title: string;
    name: string;
    mentor: string;
    text: string;
    img: string;
    tags: string[];
  }
  
  const props = defineProps<{
    cards: Card[];
  }>()
  
  const page = ref(1)
  const itemsPerPage = 6
  
  const totalPages = computed(() => Math.ceil(props.cards.length / itemsPerPage))
  
  const currentCards = computed(() => {
    const start = (page.value - 1) * itemsPerPage
    return props.cards.slice(start, start + itemsPerPage)
  })
  
  function changePage(newPage: number) {
    page.value = newPage
  }
  </script>
  
  <style scoped>
  .pagination-wrapper {
    min-height: 80px;
  }
  </style>
  