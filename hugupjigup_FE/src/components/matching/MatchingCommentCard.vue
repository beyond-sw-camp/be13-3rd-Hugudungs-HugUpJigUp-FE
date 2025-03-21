<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          v-for="(card, index) in cardData"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
        <v-card :class="cardStyle">
            <v-card-title>{{ card.title }}</v-card-title>
            <v-card-subtitle>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar :image="card.avatar" size="50"></v-avatar>
                </v-list-item-avatar>
                <v-list-item-content class="pl-30">
                    <v-list-item-title>{{ card.subtitle }}</v-list-item-title>
                  <v-list-item-subtitle
                    >멘토링 :{{ card.text1 }} / {{ card.text2 }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CardGrid",
  setup() {
    const cardData = ref([
      {
        title: "그럼에도 불구하고 사랑하게 될거야",
        subtitle: "한로로",
        text1: "가수",
        text2: "머피의 법칙",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
      {
        title: "그럼에도 불구하고 또 사랑하게 될거야",
        subtitle: "강아지",
        text1: "공원",
        text2: "놀이터",
        avatar: "https://randomuser.me/api/portraits/women/86.jpg",
      },
      {
        title: "나는 고양이가 좋아",
        subtitle: "고양이",
        text1: "캣타워",
        text2: "박스",
        avatar: "https://randomuser.me/api/portraits/women/87.jpg",
      },
      {
        title: "그럼에도 불구하고 사랑하게 될거야",
        subtitle: "한로로",
        text1: "가수",
        text2: "머피의 법칙",
        avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      },
      {
        title: "그럼에도 불구하고 또 사랑하게 될거야",
        subtitle: "강아지",
        text1: "공원",
        text2: "놀이터",
        avatar: "https://randomuser.me/api/portraits/women/86.jpg",
      },
      {
        title: "나는 고양이가 좋아",
        subtitle: "고양이",
        text1: "캣타워",
        text2: "박스",
        avatar: "https://randomuser.me/api/portraits/women/87.jpg",
      },
    ]);

    const cardStyle = ref({
      'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.05)',
      'border': '1px solid #ddd',
    });

    return {
      cardData,
      cardStyle,
    };
  },
});

</script>
