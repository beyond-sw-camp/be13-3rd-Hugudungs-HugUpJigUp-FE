<template>
    <v-app>
      <v-container>
        <v-btn color="primary" @click="dialog = true">
          자세히 보기 (팝업 확인용)
        </v-btn>

        <v-dialog v-model="dialog" max-width="600">
          <v-card color="white" style="position: relative;">
            <!-- 닫기 버튼 -->
            <v-icon
              name="mdi-close"
              class="text-black"
              style="position: absolute; top: 16px; right: 16px; cursor: pointer;"
              @click="dialog = false"
            />

            <v-card-text class="pa-4">
              <div class="main-title">멘토링 신청</div>

              <!-- API에서 가져온 데이터를 바인딩 -->
              <v-select
                v-model="selectedMentoring"
                :items="mentoringOptions.length > 0 ? mentoringOptions : []"
                label="멘토링 선택"
                variant="outlined"
                style="margin-bottom: 24px;"
                hide-no-data
                ></v-select>


              <v-textarea
                label="후기를 남겨주세요."
                variant="outlined"
                auto-grow
                rows="5"
                style="margin-bottom: 24px;"
              ></v-textarea>

              <v-btn color="red" block @click="cancel" style="margin-bottom: 8px;">취소</v-btn>
              <v-btn color="black" block @click="submit">완료</v-btn>

            </v-card-text>
          </v-card>
        </v-dialog>
      </v-container>
    </v-app>
  </template>

  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import {getMatchingList} from "@/usecases/matcing_usecase";
  import type {MatchingListResponseDto, MatchingResponseDto} from "@/domain/matching";


  export default defineComponent({
    name: 'DecisionMatchingPage',
    setup() {
      const dialog = ref(false);
      const selectedMentoring = ref(null);
      const mentoringOptions = ref<MatchingResponseDto[]>([]); // 빈 배열로 초기화

      // ✅ 백엔드에서 데이터 가져오는 함수
      const fetchMentoringOptions = async () => {
        try {
        //   const response = await axios.get('/api/mentoring/list'); // 백엔드 API 호출
        //   mentoringOptions.value = response.data; // 응답 데이터를 mentoringOptions에 저장

          const mentoringList: MatchingListResponseDto = await getMatchingList();
          mentoringOptions.value = mentoringList.content;
          console.log(mentoringOptions);

        } catch (error) {
          console.error('멘토링 목록 불러오기 실패:', error);
        }
      };

      // ✅ 페이지가 로드될 때 데이터 가져오기
      onMounted(fetchMentoringOptions);

      const cancel = () => {
        dialog.value = false;
        console.log('취소');
      };

      const submit = () => {
        console.log('완료');
        console.log('선택된 멘토링:', selectedMentoring.value);
      };

      return {
        dialog,
        selectedMentoring,
        mentoringOptions,
        cancel,
        submit,
      };
    },
  });
  </script>

