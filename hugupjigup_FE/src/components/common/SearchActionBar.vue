<template>
    <div class="d-flex align-center">
      <v-select v-model="selectedLocation" :items="locations" density="compact" class="me-2 select-field"
                hide-details @change="handleSelectChange" />
      <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                    label="검색할 내용을 입력하세요." variant="outlined" hide-details class="search-field"
                    @click:append-inner="onClick" @keyup.enter="onClick" />
      <v-btn variant="outlined" class="ms-2 navigate-button" @click="navigateToPage">작성</v-btn>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const selectedLocation = ref('제목')
  const locations = ['제목', '내용', '제목 + 내용', '작성자', '전체']
  
  const loading = ref(false)
  const loaded = ref(false)
  
  const handleSelectChange = (value: string) => {
    console.log('선택된 항목:', value)
  }
  
  function onClick() {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      loaded.value = true
    }, 2000)
  }
  
  const router = useRouter()
  function navigateToPage() {
    router.push('/new-page')
  }
  </script>
  
  <style scoped>
  .d-flex {
    display: flex;
  }
  .align-center {
    align-items: center;
  }
  .me-2 {
    margin-right: 8px;
  }
  .ms-2 {
    margin-left: 8px;
  }
  .select-field {
    width: 150px;
  }
  .search-field {
    flex-grow: 1;
  }
  .navigate-button {
    min-width: 100px;
  }
  </style>
  