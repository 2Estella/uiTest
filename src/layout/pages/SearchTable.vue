<script setup lang="ts">
import { useSlots } from 'vue';

const slots = useSlots();

</script>

<template>
  <div class="flex flex-col min-h-[calc(100vh-73px)] p-6 bg-gray-100">
    <h3
      class="mb-5 text-xl font-bold"
      v-if="slots.header"
    >
      <slot name="header"></slot>
    </h3>

    <div class="mb-3 p-5 bg-white border border-gray-300">
      <slot name="searchArea"></slot>
    </div>

    <div class="flex-1 p-4 bg-white border border-gray-300">
      <slot name="tableArea"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'SearchTable' };
</script>