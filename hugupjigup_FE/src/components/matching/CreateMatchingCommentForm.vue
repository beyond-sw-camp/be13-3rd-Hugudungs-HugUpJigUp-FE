<template>
    <v-dialog v-model="dialog" max-width="500">
        <template #activator="{ props }">
            <v-btn color="primary" v-bind="props">작성</v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h6 font-weight-bold">
                후기 작성
            </v-card-title>

            <v-card-text>
                <!-- 멘토링 선택 -->
                <v-select v-model="selectedMentoring" :items="mentoringOptions" label="멘토링 선택" dense outlined class="mb-4"/>
                <!-- 후기 입력 -->
                <v-textarea v-model="comment" label="후기를 남겨주세요." auto-grow outlined rows="4" class="mb-4"/>
            </v-card-text>

            <v-card-actions class="justify-space-between">
                <v-btn color="error" @click="dialog = false">취소</v-btn>
                <v-btn color="black" @click="submitComment">완료</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    const dialog = ref(false)
    const selectedMentoring = ref('')
    const comment = ref('')

    // 드롭다운 옵션 (실제 참여한 멘토링으로 구성하면 좋아요)
    const mentoringOptions = ref([
        '머피의 법칙',
        '지ㅣ브',
        'Cool With you',
        '참여한 멘토링만 표시',
    ])

    const submitComment = () => {
        console.log('멘토링:', selectedMentoring.value)
        console.log('후기:', comment.value)
        alert('후기가 등록되었습니다! (기능은 아직 구현 안됨)')
    }
</script>
