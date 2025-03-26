<template>
  <div class="form-wrapper">
    <div class="form-card">
      <h2 class="form-title">{{ profileTitle }} 프로필 수정</h2>

      <div class="form-group">
        <input
          type="text"
          v-model="currentJob"
          :placeholder="jobLabel"
          class="form-input"
        />
      </div>

      <div class="form-group">
        <textarea
          v-model="introduction"
          placeholder="자기소개"
          class="form-textarea"
        ></textarea>
      </div>

      <div class="form-group">
        <textarea
          v-model="career"
          placeholder="경력"
          class="form-textarea"
        ></textarea>
      </div>

      <button class="cancel-btn" @click="cancelEdit">취소</button>
      <button class="complete-btn" @click="completeEdit">완료</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "ProfileEditForm",
  props: {
    isMentor: {
      type: Boolean,
      default: false
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
.form-wrapper {
  display: flex;
  justify-content: center;
  padding: 40px 16px;
}

.form-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 4px 6px 15px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
  color: black;
}

.form-group {
  margin-bottom: 16px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px;
  font-size: 14px;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  background-color: #ffffff;
  color: black;
}

.form-textarea {
  resize: vertical;
  min-height: 80px;
}

.cancel-btn,
.complete-btn {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  color: white;
  margin-top: 12px;
  cursor: pointer;
}

.cancel-btn {
  background-color: #e53935; /* 진한 빨간색 */
}

.complete-btn {
  background-color: #333333;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #b0b0b0;
  opacity: 1;
}
</style>
