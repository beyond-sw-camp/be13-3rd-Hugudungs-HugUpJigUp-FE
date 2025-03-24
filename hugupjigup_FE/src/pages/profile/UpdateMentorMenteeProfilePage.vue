<template>
  <v-container fluid class="pa-0">
    <LogoTap />
    <v-row justify="center">
      <v-col cols="12">
        <UpdateMentorMenteeForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import UpdateMentorMenteeForm from '@/components/profile/UpdateMentorMenteeForm.vue'
</script>

<style scoped>
/* 필요 시 스타일 작성 */
</style>
