<template>
    <v-card height="150">
      <v-toolbar
        extended
        extension-height="100"
      >
        <v-img
          :src="logoUrl"
          max-height="40"
          max-width="40"
          contain
        />
        <v-toolbar-title
          class="ml-2"
        >
          로고 이름
        </v-toolbar-title>
        <template v-slot:extension>
          <v-tabs>
            <v-tab
              v-for="tab in tabs"
              :key="tab.name"
              :to="tab.to"
              router
              :text="tab.text"
            />
          </v-tabs>
        </template>
      </v-toolbar>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "CustomToolbar",
    setup() {
      const logoUrl = ref(
        "https://pplx-res.cloudinary.com/image/upload/v1742541836/user_uploads/nzWYGOksuTxrPOM/image.jpg"
      );
      const tabs = ref([
        {
          name: "notice",
          text: "공지 사항",
          to: "/notice",
        },
        {
          name: "freeboard",
          text: "자유 게시판",
          to: "/freeboard",
        },
        {
          name: "matching",
          text: "매칭 게시판",
          to: "/matching",
        },
        {
          name: "profile",
          text: "프로필",
          to: "/profile",
        },
      ]);
  
      return {
        logoUrl,
        tabs,
      };
    },
  });
  </script>
  