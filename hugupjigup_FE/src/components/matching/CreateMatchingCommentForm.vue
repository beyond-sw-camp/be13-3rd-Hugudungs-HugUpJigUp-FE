<template>
    <v-dialog v-model="dialog" max-width="500">
    <template #activator="{ props }">
        <v-btn color="primary" v-bind="props">작성</v-btn>
    </template>

    <v-card color="white">

        <v-card-text>
        <v-select
            v-model="selectedMentoring"
            :items="mentoringOptions"
            label="멘토링 선택"
            dense
            outlined
            class="mb-4"
        />

        <v-textarea
            v-model="comment"
            label="후기를 남겨주세요."
            auto-grow
            outlined
            rows="4"
            class="mb-4"
        />

        <!-- 버튼: 취소(빨간) / 완료(검정) -->
        <div class="d-flex flex-column align-center">
        <!-- 새빨간 취소 버튼 -->
        <v-btn
            block
            class="text-white mb-2"
            style="background-color: #ff0000;"
            @click="dialog = false"
        >
            취소
        </v-btn>

        <!-- 검정색 완료 버튼 -->
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
import { ref } from 'vue'

const dialog = ref(false)
const selectedMentoring = ref('')
const comment = ref('')

const mentoringOptions = ref([
    '머피의 법칙',
    'ㅈㅣㅂ',
    'Cool With you',
    '참여한 멘토링만 표시',
])

const submitComment = () => {
    console.log('멘토링:', selectedMentoring.value)
    console.log('후기:', comment.value)
    alert('후기가 등록되었습니다! (기능은 아직 구현 안됨)')
}
</script>
