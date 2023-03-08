import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Auth from '@/views/Auth.vue';
import Layout from '@/layout/Layout.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 메인 화면
    { path: '/', redirect: '/about' },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },

    {
      path: '/',

      component: Layout,
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/About'),
        },
        {
          path: '/auth',
          name: 'auth',

          component: () => import('@/views/Auth'),
        },
        {
          path: '/sample',
          name: 'sample',

          component: () => import('@/views/Sample'),
        },
      ],
    },
  ],
});
//LOGIN 처리 예시
//isAuthenticated false 일경우 경로 '/' 로그인 화면으로 리다이렉트
let isAuthenticated = true;
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' });
  else next();
});
export default router;
