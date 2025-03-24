<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card class="profile-edit-card">
            <v-card-text>
              <h2 class="profile-edit-title">{{ profileTitle }} 프로필 수정</h2>

              <v-text-field
                v-model="currentJob"
                :label="jobLabel"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="introduction"
                label="자기소개"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="career"
                label="경력"
                outlined
              ></v-text-field>

              <v-btn
                block
                class="cancel-button"
                @click="cancelEdit"
              >
                취소
              </v-btn>
              <v-btn
                block
                class="complete-button"
                @click="completeEdit"
              >
                완료
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "ProfileEditForm",
  props: {
    isMentor: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const currentJob = ref("");
    const introduction = ref("");
    const career = ref("");

    const profileTitle = computed(() => props.isMentor ? "멘토" : "멘티");
    const jobLabel = computed(() => props.isMentor ? "현재 직무" : "희망 직무");

    const cancelEdit = () => {
      alert("수정을 취소했습니다.");
    };

    const completeEdit = () => {
      alert("프로필이 수정되었습니다!");
    };

    return {
      currentJob,
      introduction,
      career,
      profileTitle,
      jobLabel,
      cancelEdit,
      completeEdit,
    };
  },
});
</script>

<style scoped>
.profile-edit-card {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background-color: white !important; /* 흰색 배경, 중요도 높임 */
  color: black !important; /* 텍스트 색상 검은색, 중요도 높임 */
}

.profile-edit-title {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: black !important; /* 텍스트 색상 검은색, 중요도 높임 */
}

.cancel-button {
  margin-top: 20px;
  color: white !important; /* 텍스트 색상, 중요도 높임 */
  background-color: #FF5733 !important; /* 이미지의 빨간색, 중요도 높임 */
  border: none !important; /* 테두리 제거, 중요도 높임 */
}

.complete-button {
  margin-top: 10px;
  color: white !important; /* 텍스트 색상, 중요도 높임 */
  background-color: #333333 !important; /* 이미지의 어두운 회색, 중요도 높임 */
  border: none !important; /* 테두리 제거, 중요도 높임 */
}

/* 텍스트 필드 내부 텍스트 색상 */
.v-text-field >>> input {
  color: black !important;
}

/* 텍스트 필드 label 색상 */
.v-label {
  color: black !important;
}
</style>
