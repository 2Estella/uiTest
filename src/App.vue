<script setup lang="ts">
import Error404 from '@/views/Error404.vue';
import { RouterView } from 'vue-router';

</script>
<script lang="ts"> export default { name: 'App' }; </script>

<template>
  <RouterView v-slot="{ Component, route }" name="layout">
    <!-- <span v-if="Component">App route.name: {{ route.name }}</span> -->
    <Suspense>
      <component :is="Component" v-if="Component" />
      <Error404 v-else>
        <template #desc>
          <h3>{{ $route.fullPath }}</h3>
          <p>요청하신 path는 지원하지 않는 path 입니다.</p>
        </template>
      </Error404>
      <template #fallback>
        초기 데이터 설정 중...
      </template>
    </Suspense>
  </RouterView>
</template>
