import type { RouteRecordMultipleViewsWithChildren, } from 'vue-router';

type LayoutRecordType = Omit<RouteRecordMultipleViewsWithChildren, 'component' | 'components'>;
type DetaultLayoutRecordType = LayoutRecordType & { meta: { title: string } };

/**
 * 기본 레이아웃 
 * 
 * @date 2/1/2024 - 10:55:23 AM
 * @param record
 **/
export const useDetaultLayout = (record: DetaultLayoutRecordType) => {
  return {
    ...record,
    path: record.path || '',
    meta: {
      title: record.meta.title || '메뉴 타이틀을 기입해주세요.'
    },
    components: {
      layout: () => import('@/views/layout/DetaultLayout.vue')
    },
  };
};

/**
 * 싱글 레이아웃 
 * 
 * @date 2/1/2024 - 10:55:23 AM
 * @param record
 **/
export const useSingleLayout = (record: LayoutRecordType) => {
  return {
    ...record,
    path: record.path || '',
    components: {
      layout: () =>  import('@/views/layout/SingleLayout.vue')
    },
  };
};

