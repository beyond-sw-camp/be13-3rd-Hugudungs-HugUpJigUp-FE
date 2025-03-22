<template>
    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <!-- 현재 페이지 데이터 표시 -->
            <div v-for="item in currentItems" :key="item.id" class="mb-2">
              {{ item.title }}
            </div>
            
            <v-container class="max-width">
              <v-pagination
                v-model="page"
                :length="totalPages"
                class="my-4"
                @update:model-value="changePage"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  
  // 페이지네이션 상태 관리
  const page = ref(1)
  const itemsPerPage = ref(10)
  
  // 샘플 데이터 (실제로는 API에서 가져올 수 있음)
  const items = ref([])
  
  // 초기 데이터 생성 (예시용)
  onMounted(() => {
    // 150개의 샘플 데이터 생성
    for (let i = 1; i <= 150; i++) {
      items.value.push({
        id: i,
        title: `아이템 ${i}`
      })
    }
  })
  
  // 전체 페이지 수 계산
  const totalPages = computed(() => {
    return Math.ceil(items.value.length / itemsPerPage.value)
  })
  
  // 현재 페이지에 표시할 아이템 계산
  const currentItems = computed(() => {
    const startIndex = (page.value - 1) * itemsPerPage.value
    const endIndex = startIndex + itemsPerPage.value
    return items.value.slice(startIndex, endIndex)
  })
  
  // 페이지 변경 시 처리
  const changePage = (newPage) => {
    page.value = newPage
    console.log(`페이지가 ${newPage}로 변경되었습니다.`)
    // 여기서 필요한 경우 API 호출 등 추가 작업 수행
  }
  
  // 페이지 변경 감시
  watch(page, (newPage) => {
    console.log(`현재 페이지: ${newPage}`)
  })
  </script>
  