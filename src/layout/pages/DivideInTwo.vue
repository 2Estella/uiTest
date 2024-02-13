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

    <div class="flex-1 flex mb-3  bg-white border border-gray-300 transition">
      <div class="basis-1/2 border-r p-5">
        <h4 class="font-bold mb-2">
          <slot name="left-title"></slot>
        </h4>

        <slot name="left"></slot>
      </div>

      <div class="basis-1/2 p-5">
        <h4 class="font-bold mb-2">
          <slot name="right-title"></slot>
        </h4>
        <div>
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'DivideInTow' };
</script>