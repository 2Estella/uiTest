import { computed, ref } from 'vue';

import { defineStore } from 'pinia';

const setup = <T>() => {
  const list = ref<T[]>([]);
  const totalListCount = ref<number>(0);
  const selectIndex = ref<number>(-1);

  const getSelectItem = computed(() => {
    if (selectIndex.value >= 0 && selectIndex.value < list.value.length) {
      return list.value[selectIndex.value];
    }

    return undefined;
  });

  const setSelectIndex = (v: typeof selectIndex.value) => {
    selectIndex.value = v < 0 ? -1 : v;
  };

  const setTotalListCount = (v: typeof totalListCount.value) => {
    totalListCount.value = v < 0 ? 0 : v;
  };

  return {
    list,

    getSelectItem,

    setSelectIndex,
    setTotalListCount,
  };
};

export const usePageTableStore =  <T = { [K: string]: any }>() => defineStore('PageTable', () => setup<T>())();