import type { RouteRecordRaw } from 'vue-router';
import { useDetaultLayout } from '@/router/common';

/**
 * AD-Maker 설정 라우터
 *
 * @date 2/1/2024 - 10:54:06 AM
 *
 * @type {RouteRecordRaw[]}
 */
export const settingsRouter: RouteRecordRaw[] = [
  useDetaultLayout({
    path: 'settings',
    meta: {
      title: 'AD-Maker 설정',
    },
    children: [
      {
        path: 'regist',
        name: 'settingsRegist',
        meta: {
          title: '서비스 신청 관리',
        },
        component: () => import('@/views/test.vue'),
      },
      {
        path: 'invite',
        name: 'settingsInvite',
        meta: {
          title: '서비스 초대 관리',
        },
        component: () => import('@/views/HomeView.vue'),
      }
    ]
  })
];