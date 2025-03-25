<template>
    <v-container>
      <v-row justify="center">
              <slot :page="page" />
          </v-row>
            <v-pagination
              v-model="page"
              :length="length"
              :total-visible="5"
              @update:model-value="handlePageChange"
            />
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  length: {
    type: Number,
    required: true,
  },
  totalVisible: {
    type: Number,
    default: 5,
  },
  changePage: {
    type: Function,
    default: () => {},
  },
});

const page = ref(1);

const handlePageChange = (newPage: number) => {
  console.log(`페이지 변경됨 -> 현재 페이지: ${newPage}`);
};
</script>

<style scoped>

.text-center {
  text-align: center;
}
</style>