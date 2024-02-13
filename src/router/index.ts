import { createRouter, createWebHistory } from 'vue-router';

import { dataInitsRouter } from '@/router/modules/dataInits';
import { settingsRouter } from '@/router/modules/settings';
import { smartAssetsRouter } from '@/router/modules/smartAssets';
import { useSingleLayout } from '@/router/common';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    useSingleLayout({
      path: '/login',
      children: [
        { path: '', name: 'login', component: () => import('@/views/HomeView.vue') },
        { path: 'children', name: 'loginChildren', component: () => import('@/views/Error404.vue') }
      ]
    }),
    {
      path: '/',
      children: [
        ...settingsRouter,
        ...dataInitsRouter,
        ...smartAssetsRouter,
      ],
    },
  ]
});

export default router;
