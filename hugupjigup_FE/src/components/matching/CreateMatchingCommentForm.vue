<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card color="white">
      <v-card-text>
        <!-- 멘토링 선택 -->
        <div class="custom-input-wrapper mb-4">
          <v-select
            v-model="selectedMentoring"
            :items="mentoringOptions"
            variant="solo"
            hide-details
            density="comfortable"
            class="custom-input"
            :menu-icon="''" 
            ref="selectRef"
          >
            <template #selection>
              <span v-if="!selectedMentoring" class="placeholder">
                멘토링 강의를 선택해주세요.
              </span>
              <span v-else>
                {{ selectedMentoring }}
              </span>
            </template>

            <template #append-inner>
              <v-icon
                class="custom-chevron"
                @mousedown.stop.prevent="toggleSelectMenu"
              >
                mdi-chevron-down
              </v-icon>
            </template>
          </v-select>
        </div>

        <!-- 후기 작성 -->
        <div class="custom-input-wrapper mb-4">
          <v-textarea
            v-model="comment"
            placeholder="후기를 남겨주세요."
            auto-grow
            variant="solo"
            rows="4"
            hide-details
            density="comfortable"
            class="custom-input"
          />
        </div>

        <!-- 버튼 영역 -->
        <div class="d-flex flex-column align-center">
          <v-btn
            block
            class="text-white mb-2"
            style="background-color: #ff0000;"
            @click="dialog = false"
          >
            취소
          </v-btn>

          <v-btn
            block
            color="black"
            class="text-white"
            @click="submitComment"
          >
            완료
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

// ✅ props와 emit을 받아서 v-model 동기화
const props = defineProps<{ dialog: boolean }>()
const emit = defineEmits(['update:dialog'])

const dialog = ref(props.dialog)
const selectedMentoring = ref('')
const comment = ref('')
const selectRef = ref()

const mentoringOptions = ref([
  '머피의 법칙',
  'ㅈㅣㅂ',
  'Cool With you',
  '참여한 멘토링만 표시',
])

// v-model 동기화
watch(() => props.dialog, (val) => {
  dialog.value = val
})
watch(dialog, (val) => {
  emit('update:dialog', val)
})

const toggleSelectMenu = () => {
  if (selectRef.value) {
    selectRef.value.menu = !selectRef.value.menu
  }
}

const submitComment = () => {
  console.log('멘토링:', selectedMentoring.value)
  console.log('후기:', comment.value)
  alert('후기가 등록되었습니다! (기능은 아직 구현 안됨)')
}
</script>

<style scoped>
.custom-input-wrapper {
  background-color: white;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 0;
  overflow: hidden;
}

::v-deep(.custom-input .v-field) {
  background-color: white !important;
  border-radius: 10px !important;
  box-shadow: none !important;
  color: black !important;
}

.placeholder {
  color: #9e9e9e;
}

.custom-chevron {
  font-size: 24px;
  font-weight: bold;
  color: black;
  cursor: pointer;
}
</style>

<style>
/* 드롭다운 메뉴 스타일 */
.v-overlay__content {
  background-color: white !important;
  color: black !important;
  border: 1px solid #d3d3d3 !important;
  border-radius: 10px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
}

.v-list-item-title {
  color: black !important;
}

.v-overlay__content .v-list,
.v-overlay__content .v-sheet {
  background-color: white !important;
}

::v-deep(.custom-input .v-field__append-inner) {
  background-color: white !important;
}
</style>
