<script setup lang="ts">
type IconType = string;

const props =  withDefaults(defineProps<{
  path: IconType;
  color?: string;
  size: string
}>(), {
  color: 'black'
});

</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    :fill="props.color"
    :width="props.size"
    :height="props.size"
  >
    <path :d="props.path" />
  </svg>
</template>