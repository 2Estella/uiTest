<script setup lang="ts">
import MaterialIcon from '@/components/MaterialIcon/MaterialIcon.vue';
import { menu, edit_square, logout } from '@/assets/svg/iconPath';
import { FLEX } from '@/constants/style/customClass';

const emit = defineEmits<{
  (event: 'toggleMenu'): void
}>();


// const test = () => {
//   console.log('hihih');
// };

</script>

<template>
  <header class="fixed h-18 z-30 w-full bg-primary-300 text-primary-50">
    <div class="py-3 px-3">
      <div :class="`${FLEX.centerBetween}`">
        <div :class="`${FLEX.centerStart} gap-2`">
          <MaterialIcon
            size="30"
            fill="#DDE6ED"
            class="cursor-pointer"
            :path="menu"
            @click="emit('toggleMenu')"
          />
          <h2 class="text-xl font-bold">AD-MAKER 통합관리자</h2>
        </div>

        <div :class="`${FLEX.centerStart}`">
          <a href="#" :class="`${FLEX.centerStart} gap-1 mx-5`">
            <span class="text-sm font-bold">시스템 관리자</span>
            <MaterialIcon size="20" fill="#DDE6ED" :path="edit_square" />
          </a>
          <a href="#" :class="`${FLEX.centerStart} gap-1`">
            <span class="text-sm font-bold">로그아웃</span>
            <MaterialIcon size="20" fill="#DDE6ED" :path="logout" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>