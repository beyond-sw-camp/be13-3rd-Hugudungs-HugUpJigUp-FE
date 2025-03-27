<template>
  <v-container fluid class="pa-0">
    <LogoTap />
    <v-row justify="center">
      <v-col cols="12">
        <UpdateMentorMenteeForm :is-mentor=isMentor />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import UpdateMentorMenteeForm from '@/components/profile/UpdateMentorMenteeForm.vue'
import {useRoute} from "vue-router";

const router = useRoute();
const isMentor: boolean = router.query.isMentor === '1';
</script>

<style scoped>
/* 필요 시 스타일 작성 */
</style>
