<template>
    <v-app>
      <v-container>
        <!-- 댓글 개수 표시 -->
        <div class="comment-count">댓글 {{ comments.length }}</div>
        <hr>
  
        <!-- 댓글 목록 -->
        <v-card v-for="comment in comments" :key="comment.id" class="mb-2">
          <div class="comment-container">
            <v-avatar size="40" class="mr-3">
              <v-img :src="comment.user.profileImage" alt="프로필 이미지" aspect-ratio="1"></v-img>
            </v-avatar>
            <div class="comment-info-container">
              <div class="comment-name">{{ comment.user.name }}</div>
              <div class="comment-content">{{ comment.content }}</div>
              <div class="comment-date">{{ formatDate(comment.createdAt) }}</div>
            </div>
            <!-- 수정/삭제 버튼 -->
            <div class="comment-actions">
              <v-btn icon @click="comment.showMenu = !comment.showMenu" class="comment-menu-button">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
              <div v-if="comment.showMenu" class="comment-menu">
                <v-btn text @click="editComment(comment)" class="edit-button">수정</v-btn>
                <v-btn text @click="deleteComment(comment)" class="delete-button">삭제</v-btn>
              </div>
            </div>
          </div>
        </v-card>
        <hr>
  
        <!-- 댓글 입력 영역 -->
        <v-card>
          <div class="comment-input-container">
            <v-avatar size="40" class="mr-3">
              <v-img :src="currentUser.profileImage" alt="프로필 이미지" aspect-ratio="1"></v-img>
            </v-avatar>
            <div class="textarea-wrapper">
              <span class="user-name">{{ currentUser.name }}</span>
              <v-textarea
                placeholder="내용을 입력해주세요."
                outlined
                rows="4"
                class="profile-textarea"
              ></v-textarea>
            </div>
          </div>
          <v-card-actions>
            <v-btn color="primary">등록</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-app>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  // 댓글 데이터 타입 정의
  interface Comment {
    id: number;
    user: {
      id: string;
      name: string;
      profileImage: string;
    };
    content: string;
    createdAt: string;
    showMenu: boolean; // 메뉴 표시 여부
  }
  
  export default defineComponent({
    name: "CommentComponent",
    setup() {
      const comments = ref<Comment[]>([
        {
          id: 1,
          user: {
            id: 'user1',
            name: '연정',
            profileImage: 'https://picsum.photos/id/1027/40/40',
          },
          content: '기타치고 노래하는 싱어송라이터 연정입니다~',
          createdAt: '2025-03-06T15:20:00',
          showMenu: false,
        },
        {
          id: 2,
          user: {
            id: 'user2',
            name: '한로로',
            profileImage: 'https://picsum.photos/id/1028/40/40',
          },
          content: "사용하고 있는 게임 닉네임은 '체리겅듀'이다. 닉네임의 의미는 그냥 '체리공주'이기 때문",
          createdAt: '2025-03-06T15:20:00',
          showMenu: false,
        },
        {
          id: 3,
          user: {
            id: 'user3',
            name: '해린',
            profileImage: 'https://picsum.photos/id/1029/40/40',
          },
          content: '돈까스요~',
          createdAt: '2025-03-06T15:20:00',
          showMenu: false,
        },
        {
          id: 3,
          user: {
            id: 'user3',
            name: '해린',
            profileImage: 'https://picsum.photos/id/1029/40/40',
          },
          content: '돈까스요~',
          createdAt: '2025-03-06T15:20:00',
          showMenu: false,
        },
      ]);
  
      const currentUser = ref({
        id: 'user1',
        name: '연정',
        profileImage: 'https://picsum.photos/id/1027/40/40',
      });
  
      const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}.${month}.${day} ${hours}:${minutes}`;
      };
  
      const isOwner = (userId: string) => {
        return currentUser.value.id === userId;
      };
  
      const editComment = (comment: Comment) => {
        console.log('수정 기능 실행', comment);
      };
  
      const deleteComment = (comment: Comment) => {
        console.log('삭제 기능 실행', comment);
      };
  
      return {
        comments,
        currentUser,
        formatDate,
        isOwner,
        editComment,
        deleteComment,
      };
    },
  });
  </script>
  
  <style scoped>
  .comment-count {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .comment-container {
    display: flex;
    align-items: flex-start;
    padding: 16px;
    position: relative;
  }
  
  .comment-image {
    border-radius: 50%;
  }
  
  .comment-info-container {
    flex: 1;
  }
  
  .comment-name {
    font-weight: bold;
    margin-bottom: 4px;
  }
  
  .comment-content {
    margin-bottom: 4px;
  }
  
  .comment-date {
    font-size: 0.8rem;
    color: #777;
  }
  
  .comment-menu-button {
    /* margin-left: auto; */
    /* margin-top: -8px; */
  }
  
  .comment-menu-list {
    /* 필요에 따라 스타일 조정 */
  }
  
  /* 댓글 입력 영역 스타일 */
  .comment-input-container {
    display: flex;
    align-items: flex-start;
    padding: 16px;
  }
  
  .textarea-wrapper {
    flex: 1;
  }
  
  .profile-textarea {
    flex: 1; /* textarea가 남은 공간을 모두 차지하도록 설정 */
    margin-left: 16px; /* 이미지와 textarea 사이 간격 */
    margin-top: 0px; /* 닉네임과 textarea 사이 간격 제거 */
  }
  
  .user-name {
    font-weight: bold;
    display: block; /* span 태그를 block 요소로 변경 */
    margin-left: 16px; /* 이미지와 간격 맞춤 */
    margin-bottom: 4px; /* 닉네임과 textarea 사이 간격 */
  }
  
  /* comment-actions 스타일 */
  .comment-actions {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
  }
  
  /* comment-menu 스타일 */
  .comment-menu {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .comment-menu button {
    padding: 8px 12px;
    background-color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .comment-menu button:hover {
    background-color: #f0f0f0;
  }
  
  /* 수정 버튼 스타일 */
  .edit-button {
    color: black;
  }
  
  /* 삭제 버튼 스타일 */
  .delete-button {
    color: black;
  }
  </style>
  