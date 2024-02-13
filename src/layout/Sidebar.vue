<script setup lang="ts">
import { useRouter } from 'vue-router';
import MaterialIcon from '@/components/MaterialIcon/MaterialIcon.vue';
import { settings, description, widgets, expand_more } from '@/assets/svg/iconPath';
import { ref } from 'vue';

const menuList = [
  {
    id: 0,
    menu: 'AD-Maker 설정',
    path: 'settings',
    icon: settings,
    children: [
      { menu: '서비스 신청 관리', path: 'regist' },
      { menu: '서비스 초대 관리', path: 'invite' },
      // { menu: '멤버 관리', path: '', active: false },
    ]
  },
  {
    id: 1,
    menu: '초기 데이터',
    path: 'dataInits',
    icon: description,
    children: [
      { menu: 'DB 기본 항목', path: 'inputConfig' },
      { menu: '카테고리', path: 'category' },
    ]
  },
  {
    id: 2,
    menu: '스마트 에셋',
    path: 'smartAssets',
    icon: widgets,
    children: [
      { menu: '레이아웃', path: 'layout' },
      { menu: '약관 페이지', path: 'policy' },
      { menu: '입력폼', path: 'inputForm' },
      { menu: '임포트', path: 'import' },
    ]
  },
];

const router = useRouter();

const clickMenu = (path: string): void => {
  router.push(`/${path}`);
};

const activeMenuId = ref<number>();

const toggleMenu = (id: number) => {
  if (activeMenuId.value === id) {
    activeMenuId.value = undefined;

  } else {
    activeMenuId.value = id;
  }
};
</script>

<template>
  <div class="sidebar-container">
    <!-- <div class="flex relative flex-col flex-1 pt-0 min-h-0 bg-primary-50"> -->
    <!-- <div class="flex overflow-y-auto flex-col flex-1 pt-8 pb-4"> -->
    <div class="flex-1 px-6 bg-primary-50">
      <ul class="gnb-menu pb-2 pt-1">
        <li :key="item.id" :class="['mb-3', item.id === activeMenuId ? 'on' : '']" v-for="item in menuList">
          <a
            href="#"
            class="flex justify-between items-center my-2 text-base font-semibold"
            @click.prevent="toggleMenu(item.id)"
          >
            <div class="flex justify-start items-center gap-3">
              <MaterialIcon size="22" :path="item.icon" />
              {{ item.menu }}
            </div>

            <MaterialIcon size="22" class="folder-arrow" :path="expand_more" />
          </a>

          <ul class="test" :style="{ height: activeMenuId === item.id ? `${item.children.length * 30}px` : '0px' }">
            <li
              :key="subItem.menu"
              class="pl-9 py-1 hover:bg-primary-100 text-sm"
              v-for="subItem in item.children"
            >
              <a href="#" @click.prevent="clickMenu(`${item.path}/${subItem.path}`)">{{ subItem.menu }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<style scoped>
.folder-arrow {
  transition: transform 0.2s;
}
.on .folder-arrow {
  transform: rotate(180deg);
}

.gnb-menu .test {
  transition: all 0.3s;
  overflow: hidden;
}
</style>