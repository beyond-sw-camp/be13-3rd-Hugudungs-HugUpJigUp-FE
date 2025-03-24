/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

// import MatchingPostCard from '@/components/matching/MatchingPostCard.vue';
// import CreateMatchingForm from '@/components/matching/CreateMatchingForm.vue';
// import UpdateMentorMenteeForm from '@/components/profile/UpdateMentorMenteeForm.vue';
// import CreateCommentForm from '@/components/board/CreateCommentForm.vue';
// import MatchingCommentCard from '@/components/matching/MatchingCommentCard.vue'
// import LogoTap from '@/components/common/LogoTap.vue';
// import PageTop from '@/components/common/PageTop.vue';
import MatchingPopup from '@/components/matching/MatchingPopup.vue'
import CreateMatchingCommentForm from '@/components/matching/CreateMatchingCommentForm.vue'
import Pagination from '@/components/common/Pagination.vue';
import CreatePostForm from '@/components/board/CreatePostForm.vue';
import UpdateProfileForm from '@/components/profile/UpdateProfileForm.vue';
import MentorMenteeContext from '@/components/profile/MentorMenteeContext.vue';
import CountLabel from '@/components/profile/CountLabel.vue';

import UpdateProfilePage from '@/pages/profile/UpdateProfilePage.vue'
import CreateFreePostPage from '@/pages/board/CreateFreePostPage.vue';

const routes = [
  // { path: '/', component: LogoTap },
  // { path: '/', component: PageTop },
  // { path: '/', component: MatchingPostCard },
  // { path: '/', component: MatchingCommentCard },
  // { path: '/', component: CreateMatchingForm },
  // { path: '/', component: UpdateMentorMenteeForm },
  // { path: '/', component: CreateCommentForm },
  { path: '/test-popup', component: MatchingPopup },
  { path: '/test-comment', component: CreateMatchingCommentForm },
  { path: '/test-createpost', component: CreatePostForm },
  { path: '/test-updateprofile', component: UpdateProfileForm },
  { path: '/', component: Pagination },
  { path: '/context', component: MentorMenteeContext },
  { path: '/count', component: CountLabel },
  
  { path: '/update-profile', component: UpdateProfilePage },
  { path: '/create-post', component: CreateFreePostPage },
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
