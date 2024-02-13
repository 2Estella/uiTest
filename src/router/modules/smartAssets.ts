import type { RouteRecordRaw } from 'vue-router';
import { useDetaultLayout } from '@/router/common';

/**
 * 스마트 에셋 라우터
 * 
 * @date 2/1/2024 - 10:54:06 AM
 *
 * @type {RouteRecordRaw[]}
 */
export const smartAssetsRouter: RouteRecordRaw[] = [
    
  useDetaultLayout({
    path: 'smartAssets',
    meta: {
      title: '스마트 에셋',
    },
    children: [
      {
        path: 'layout',
        name: 'smartAssetsLayout',
        meta: {
          title: '레이아웃',
        },
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'policy',
        name: 'smartAssetsPolicy',
        meta: {
          title: '약관 페이지​',
        },
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'inputForm',
        name: 'smartAssetsInputForm',
        meta: {
          title: '입력폼​​',
        },
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'import',
        name: 'smartAssetsImport',
        meta: {
          title: '임포트​',
        },
        component: () => import('@/views/HomeView.vue'),
      }
    ]
  })
];