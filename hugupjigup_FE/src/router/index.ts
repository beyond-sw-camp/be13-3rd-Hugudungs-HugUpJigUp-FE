/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

import MatchingPostCard from '@/components/matching/MatchingPostCard.vue';
import CreateMatchingForm from '@/components/matching/CreateMatchingForm.vue';
import UpdateMentorMenteeForm from '@/components/profile/UpdateMentorMenteeForm.vue';
import CreateCommentForm from '@/components/board/CreateCommentForm.vue';
import MatchingCommentCard from '@/components/matching/MatchingCommentCard.vue'
import MatchingPopup from '@/components/matching/MatchingPopup.vue'
import CreateMatchingCommentForm from '@/components/matching/CreateMatchingCommentForm.vue'
import Pagination from '@/components/common/Pagination.vue';
import MatchingPagination from '@/components/common/MatchingPagination.vue';
import CreatePostForm from '@/components/board/CreatePostForm.vue';
import UpdateProfileForm from '@/components/profile/UpdateProfileForm.vue';
import MentorMenteeContext from '@/components/profile/MentorMenteeContext.vue';
import CountLabel from '@/components/profile/CountLabel.vue';

import CreateMatchingCommentPage from '@/pages/matching/CreateMatchingCommentPage.vue';
import OTPVerify from '@/components/sign/OTPVerify.vue';

// pages vue
import DecisionMatchingPage from '@/pages/matching/DecisionMatchingPage.vue';
import UpdateMentorMenteeProfilePage from '@/pages/profile/UpdateMentorMenteeProfilePage.vue';
import ApplyMatchingPage from '@/pages/matching/ApplyMatchingPage.vue';
import UpdateProfilePage from '@/pages/profile/UpdateProfilePage.vue'
import CreateFreePostPage from '@/pages/board/CreateFreePostPage.vue';
import MatchingPage from '@/pages/matching/MatchingPage.vue';
import SignUpPage from '@/pages/sign/SignUpPage.vue';
import UserProfilePage from '@/pages/profile/UserProfilePage.vue';
import MatchingCommentPage from '@/pages/matching/MatchingCommentPage.vue';

const routes = [
  
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
  { path: '/matchingpagination', component: MatchingPagination },
  { path: '/context', component: MentorMenteeContext },
  { path: '/count', component: CountLabel },
  { path: '/OTP', component: OTPVerify },

  
  //pages vue
  { path: '/update-mentormentee-profile', component: UpdateMentorMenteeProfilePage },
  { path: '/update-profile', component: UpdateProfilePage },
  { path: '/create-post', component: CreateFreePostPage },
  { path: '/matching', component: MatchingPage },
  { path: '/signup', component: SignUpPage},
  { path: '/create-matching-comment', component: CreateMatchingCommentPage },
  { path: '/profile', component: UserProfilePage },
  { path: '/apply-matching-page', component: ApplyMatchingPage },
  { path: '/decision', component: DecisionMatchingPage },
  { path: '/matchingcomment', component: MatchingCommentPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error');
      localStorage.setItem('vuetify:dynamic-reload', 'true');
      location.assign(to.fullPath);
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
