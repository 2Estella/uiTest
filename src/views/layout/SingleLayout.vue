<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>
<script lang="ts"> export default { name: 'SingleLayout' }; </script>
<template>
  <div>
    <h1>SingleLayout</h1>
    <h3>{{ $route.fullPath }}</h3>
    
    <RouterView :key="$route.fullPath" v-slot="{ Component, route }">
      <Transition appear v-if="Component !== undefined">
        <component :key="route.fullPath" :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>