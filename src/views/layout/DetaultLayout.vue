<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, } from 'vue-router';
import MainHeader from '@/layout/MainHeader.vue';
import Sidebar from '@/layout/Sidebar.vue';

const isSidebarOpen = ref<boolean>(true);

const toggleMenu = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div>
    <MainHeader @toggle-menu="toggleMenu" />

    <main class="flex pt-12">
      <Transition name="slide-right">
        <Sidebar v-if="isSidebarOpen" />
      </Transition>

      <div class="mainContent w-full" :style="isSidebarOpen ? 'padding-left: 240px;' : 'padding-left: 0;'">
        <RouterView :key="$route.fullPath" v-slot="{ Component, route }">
          <Transition appear v-if="Component !== undefined">
            <component :key="route.fullPath" :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </main>
  </div>
</template>

<script lang="ts"> export default { name: 'DetaultLayout' }; </script>