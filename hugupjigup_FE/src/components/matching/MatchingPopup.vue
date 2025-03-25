<template>
  <v-dialog v-model="dialog" max-width="1000">
    <template #activator="{ props }">
      <v-btn color="primary" v-bind="props">자세히 보기</v-btn>
    </template>

    <v-card color="white" class="pa-4" style="position: relative;">
      <!-- 닫기 버튼 -->
      <v-icon
        icon="mdi-close"
        class="text-black"
        style="position: absolute; top: 16px; right: 16px; cursor: pointer;"
        @click="dialog = false"
      />

      <!-- 태그 -->
      <v-chip
        class="bg-black text-white"
        size="small"
        style="position: absolute; top: 56px; right: 16px; z-index: 1; border-radius: 6px;"
      >
        <v-icon start size="16" class="text-white">mdi-check</v-icon>
        {{ card.title }}
      </v-chip>

      <v-card-title class="text-h6 font-weight-bold pb-2">
        {{ card.subtitle }}
      </v-card-title>

      <v-card-text class="py-2">
        <v-row align="center">
          <v-col cols="12" sm="3" class="d-flex align-center">
            <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-left: -12px;">
              <v-img :src="card.image" cover width="100%" height="100%" />
            </div>
          </v-col>

          <v-col cols="12" sm="9" class="pt-0">
            <div class="text-h5 font-weight-bold mb-2">{{ card.title }}</div>
            <div class="mb-1"><strong>경력:</strong> <span class="text-grey-darken-1">{{ card.career }}</span></div>
            <div class="mb-3"><strong>현직:</strong> <span class="text-grey-darken-1">{{ card.introduction }}</span></div>
          </v-col>
        </v-row>

        <v-divider class="my-4" />

        <div class="mb-4">
          <div class="font-weight-medium mb-1">• 경력</div>
          <div class="text-grey-darken-1">{{ card.career }}</div>
        </div>

        <div>
          <div class="font-weight-medium mb-1">• 자기소개</div>
          <div class="text-grey-darken-1" style="white-space: pre-line;">
            {{ card.introduction }}
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn block class="bg-black text-white">멘토링 신청하기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)

defineProps<{ card: {
  image: string;
  title: string;
  subtitle: string;
  career: string;
  introduction: string;
} }>()
</script>
