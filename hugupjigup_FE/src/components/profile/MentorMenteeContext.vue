<template>
    <v-app>
        <v-container>
            <div class="position-relative">
                <v-btn icon="$edit" variant="outlined" class="card-button" @click="handleButtonClick" 
                       size="small" width="44" height="44">
                </v-btn>
                <v-card :title="cardData.title" :text="cardData.text" class="custom-card" width="500">
                </v-card>
            </div>
        </v-container>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface CardData {
    title: string;
    text: string;
}

const cardData = ref<CardData>({
    title: '멘토',
    text: `술은 한 잔도 먹지 않았는데
너에게 취해 난 비틀거려요
너의 어깨에 기대고 싶은데
그 어깨는 비어 있지 않죠
그대가 향한 시선이 나에게 향해졌으면
그대의 예쁜 미소가 나에게만 보였으면 좋겠어
내 사랑이 작았나요 그래서 보지 못한 건가요
사랑을 담을 맘이 작은 것뿐인데
내가 사랑하고 갖고 싶었던
그 모든 것들은 항상 내 곁에 머물지 않죠
혼자가 아닌 둘이 만들어가는
사랑을 꿈꿔요 나와 같이 꿈꿔요
세차 한 날은 비가 꼭 내리고
공부한 건 시험에 안 나오죠
반대로만 가는 머피의 법칙
어찌 내 사랑도 그리되는가요
항상 멀리 뒤에서만 바라본 그대 뒷모습
행여 그림자 밟을까 조심스레 건네는 한 걸음
내 사랑이 작았나요 그래서 보지 못한 건가요
사랑을 담을 맘이 작은 것뿐인데
내가 사랑하고 갖고 싶었던
그 모든 것들은 항상 내 곁에 머물지 않죠
혼자가 아닌 둘이 만들어가는
사랑을 꿈꿔요 나와 같이 꿈꿔요

`});

const handleButtonClick = () => {
    console.log('Button clicked');
};
</script>

<style scoped>
.position-relative {
    position: relative;
}

.card-button {
    position: absolute;
    left: -60px;
    z-index: 1;
}

.custom-card {
    /* 추가 스타일링이 필요한 경우 여기에 작성 */
}
</style>
