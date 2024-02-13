<script setup lang="ts">
import MaterialIcon from '@/components/MaterialIcon/MaterialIcon.vue';
import { menu, edit_square, logout } from '@/assets/svg/iconPath';

</script>

<template>
  <div class="fixed z-30 w-full bg-primary-300 text-primary-50">
    <div class="py-3 px-3 lg:px-5 lg:pl-3">
      <div class="flex justify-between items-center">
        <div class="flex justify-start items-center gap-2">
          <MaterialIcon size="30" fill="#DDE6ED" :path="menu" />
          <h2 class="text-xl font-bold">AD-MAKER 통합관리자</h2>
        </div>

        <div class="flex justify-start items-center">
          <a href="#" class="mx-5 flex justify-start items-center gap-1">
            <span class="text-sm font-bold">시스템 관리자</span>
            <MaterialIcon size="20" fill="#DDE6ED" :path="edit_square" />
          </a>
          <a href="#" class="flex justify-start items-center gap-1">
            <span class="text-sm font-bold">로그아웃</span>
            <MaterialIcon size="20" fill="#DDE6ED" :path="logout" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>