<template>
  <v-container>
    <v-card class="card-style" @click="openDialog">
      <v-card-title class="card-title">{{ title }}</v-card-title>
      <v-card-subtitle>
        <v-list-item class="list-item">
          <template #prepend>
            <v-avatar size="50">
              <v-img :src="avatar"/>
            </v-avatar>
          </template>
          <v-list-item-content>
            <v-list-item-title class="subtitle">{{ subtitle }}</v-list-item-title>
            <v-list-item-subtitle class="card-subtitle">
              멘토링: {{ text1 }} / {{ text2 }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card-subtitle>
    </v-card>

    <v-dialog 
      class="dialog-content"
      v-model="dialog" 
      max-width="800"
    >
      <v-card>
        <v-card-title class="dialog-title">{{ title }}</v-card-title>
        <v-divider/>
        <v-list-item class="dialog-subitem">
          <template #prepend>
            <v-avatar size="50">
              <v-img :src="avatar"/>
            </v-avatar>
          </template>
          <v-list-item-content>
            <v-list-item-title class="subtitle">{{ subtitle }}</v-list-item-title>
            <v-list-item-subtitle>
              멘토링: {{ text1 }} / {{ text2 }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-dialog>
  </v-container>
  <v-spacer></v-spacer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  title: {
    type: String,
    default: "기본 제목", // 기본값 설정
  },
  subtitle: {
    type: String,
    default: "기본 부제목", // 기본값 설정
  },
  text1: {
    type: String,
    default: "기본 텍스트1", // 기본값 설정
  },
  text2: {
    type: String,
    default: "기본 텍스트2", // 기본값 설정
  },
  avatar: {
    type: String,
    default: "https://via.placeholder.com/50", // 기본 아바타 이미지 URL
  },
});

const dialog = ref(false);

const openDialog = () => {
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};
</script>

<style scoped>
.card-style {
  max-width: 400px;
  max-height: 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #1e1e1e;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}

.card-style:hover {
  transform: scale(1.05);
}

.card-title {
  margin-left: -10px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.5;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list-item {
  margin-left: -30px;
  display: flex;
  align-items: center;
}

.subtitle {
  text-align: left;
  font-size: 15px;
  font-weight: bold;
}

.card-subtitle {
  text-align: left;
  font-size: 15px;
  color: #bdbdbd;
}

.dialog-title {
  padding-top: 30px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: bold;
}

.dialog-content {
  align-items: center;
  max-height: 300px;
  overflow-y: auto;
}

.dialog-subitem {
  padding-top: 30px;
  padding-bottom: 50px;
}

</style>
