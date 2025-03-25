/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { useRoute } from 'vue-router'

import MatchingPostCard from '@/components/matching/MatchingPostCard.vue'
import CreateMatchingForm from '@/components/matching/CreateMatchingForm.vue'
import UpdateMentorMenteeForm from '@/components/profile/UpdateMentorMenteeForm.vue'
import CreateCommentForm from '@/components/board/CreateCommentForm.vue'
import MatchingCommentCard from '@/components/matching/MatchingCommentCard.vue'
import MatchingPopup from '@/components/matching/MatchingPopup.vue'
import CreateMatchingCommentForm from '@/components/matching/CreateMatchingCommentForm.vue'
import Pagination from '@/components/common/Pagination.vue'
import CreatePostForm from '@/components/board/CreatePostForm.vue'
import UpdateProfileForm from '@/components/profile/UpdateProfileForm.vue'
import MentorMenteeContext from '@/components/profile/MentorMenteeContext.vue'
import CountLabel from '@/components/profile/CountLabel.vue'

import CreateMatchingCommentPage from '@/pages/matching/CreateMatchingCommentPage.vue'
import OTPVerify from '@/components/sign/OTPVerify.vue'

import InsertTextForm from '@/components/sign/InsertTextForm.vue'

// Pages
import DecisionMatchingPage from '@/pages/matching/DecisionMatchingPage.vue'
import UpdateMentorMenteeProfilePage from '@/pages/profile/UpdateMentorMenteeProfilePage.vue'
import ApplyMatchingPage from '@/pages/matching/ApplyMatchingPage.vue'
import UpdateProfilePage from '@/pages/profile/UpdateProfilePage.vue'
import CreateFreePostPage from '@/pages/board/CreateFreePostPage.vue'
import MatchingPage from '@/pages/matching/MatchingPage.vue'
import SignUpPage from '@/pages/sign/SignUpPage.vue'
import UserProfilePage from '@/pages/profile/UserProfilePage.vue'

// Error Pages
import NotFoundPage from '@/pages/error/NotFoundPage.vue'
import NoContent from '@/components/error/NoContent.vue'
import Forbidden from '@/components/error/Forbidden.vue'
import InternalServerError from '@/components/error/InternalServerError.vue'

const routes = [
  // 일반 테스트용 라우트
  { path: '/postcard', component: MatchingPostCard },
  { path: '/commentcard', component: MatchingCommentCard },
  { path: '/matchingform', component: CreateMatchingForm },
  { path: '/mentormenteeform', component: UpdateMentorMenteeForm },
  { path: '/commentform', component: CreateCommentForm },
  { path: '/test-popup', component: MatchingPopup },
  { path: '/test-comment', component: CreateMatchingCommentForm },
  { path: '/test-createpost', component: CreatePostForm },
  { path: '/test-updateprofile', component: UpdateProfileForm },
  { path: '/pagination', component: Pagination },
  { path: '/context', component: MentorMenteeContext },
  { path: '/count', component: CountLabel },
  { path: '/OTP', component: OTPVerify },
  { path: '/insert', component: InsertTextForm },

  // Matching 관련
  { path: '/create-matching-comment', component: CreateMatchingCommentPage },
  { path: '/apply-matching-page', component: ApplyMatchingPage },
  { path: '/decision', component: DecisionMatchingPage },

  // 페이지 단위
  { path: '/update-mentormentee-profile', component: UpdateMentorMenteeProfilePage },
  { path: '/update-profile', component: UpdateProfilePage },
  { path: '/create-post', component: CreateFreePostPage },
  { path: '/matching', component: MatchingPage },
  { path: '/signup', component: SignUpPage },
  { path: '/profile', component: UserProfilePage },

  // ✅ 에러 테스트용 라우트 (개발 중 테스트용)
  {
    path: '/test-error/:code',
    name: 'TestError',
    component: {
      template: '<div>에러 테스트 중...</div>',
      setup() {
        const route = useRoute()
        const code = route.params.code
        throw new Error(String(code))
      }
    }
  },

  // 에러 페이지들
  { path: '/notfound', component: NotFoundPage },
  { path: '/nocontent', component: NoContent },
  { path: '/forbidden', component: Forbidden },
  { path: '/internalservererror', component: InternalServerError },

  // catch-all
  { path: '/:pathMatch(.*)*', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
