import type { RouteRecordRaw } from 'vue-router';
import { useDetaultLayout } from '@/router/common';

/**
 * 초기 데이터 라우터
 *
 * @date 2/1/2024 - 10:54:06 AM
 *
 * @type {RouteRecordRaw[]}
 */
export const dataInitsRouter: RouteRecordRaw[] = [
  useDetaultLayout({
    path: 'dataInits',
    meta: {
      title: '초기 데이터',
    },
    children: [
      {
        path: 'inputConfig',
        name: 'dataInitsInputConfig',
        meta: {
          title: 'DB 기본 항목',
        },
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'category',
        name: 'dataInitsCategory',
        meta: {
          title: '카테고리​​',
        },
        component: () => import('@/views/HomeView.vue'),
      },
    ]
  })
];