<script setup lang="ts">
import { RouterView, } from 'vue-router';
import MainHeader from '@/layout/MainHeader.vue';
import Sidebar from '@/layout/Sidebar.vue';

</script>

<template>
  <div>
    <MainHeader />

    <Sidebar />

    <RouterView :key="$route.fullPath" v-slot="{ Component, route }">
      <Transition appear v-if="Component !== undefined">
        <component :key="route.fullPath" :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script lang="ts"> export default { name: 'DetaultLayout' }; </script>