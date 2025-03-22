<template>
    <v-dialog v-model="dialog" max-width="600">
        <template #activator="{ props }">
            <v-btn color="primary" v-bind="props">
                자세히 보기 (팝업 확인용)
            </v-btn>
        </template>

        <v-card>
            <!-- 기술 태그 영역 -->
            <v-card-title class="text-h6 font-weight-bold d-flex flex-column">
                {{ title }}
                <div class="mt-2">
                    <v-chip v-for="(tag, index) in skillTags" :key="index" class="ma-1" color="primary" variant="outlined" size="small">
                        {{ tag }}
                    </v-chip>
                </div>
            </v-card-title>

            <!-- 본문 -->
            <v-card-text>
                <div class="mb-2">
                    <strong>경력:</strong> {{ experience }}
                </div>

                <div class="mb-2">
                    <strong>소속:</strong> {{ affiliation }}
                </div>

                <div>
                    <strong>자기소개:</strong><br>
                    {{ description }}
                </div>
            </v-card-text>

            <!-- 하단 버튼 -->
            <v-card-actions>
                <v-btn color="success" @click="applyMentoring">멘티 신청하기</v-btn>
                    <v-spacer></v-spacer>
                <v-btn text @click="dialog = false">닫기</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'

    const dialog = ref(false)

    const title = ref('머피의 법칙(Rock ver)')
    const experience = ref('3년차')
    const affiliation = ref('그로이 엔터테인먼트')
    const description = ref(`기타치고 노래하는 싱어송라이터 연정입니다~
                            서경대에 재학하며 기타 세션으로 활동했고, 홍대에서 공연하며 대학 생활을 했습니다.
                            유재하 음악경연대회에서 '머피의 법칙'으로 장려상을 받으며 유재하 33기로 활동했어요.`)

    const skillTags = ref(['C언어', 'JAVA', 'Vue.js']) // 원하는 스킬 태그를 여기에 추가

    const applyMentoring = () => {
        alert('멘티 신청이 완료되었습니다! (기능 구현 예정)')
    }
</script>
