<script setup lang="ts">
import { usePageTableStore } from '@/stores/pageTable/index';
import { storeToRefs } from 'pinia';

type TableItem = { 
  title: string,
  price: number,
  
};

const store = usePageTableStore<TableItem>();
const { list } = storeToRefs(store);

list.value = [
  { title: 'vue.js', price: 5000 },
  { title: 'typescript', price: 15000 },
];

</script>
<script lang="ts"> export default { name: 'HomeView' }; </script>
<template>
  <div>HomeView</div>
  <div>
    <span>선택 품목: <b>{{ store.getSelectItem?.title || 'X' }}</b> </span>
  </div>
  <table>
    <thead>
      <tr>
        <th>목록</th>
        <th>가격</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="index" v-for="(item, index) in list">
        <td :key="key" v-for="(value, key) in item">
          {{ value }}
        </td>
        <td>
          <button @click="store.setSelectIndex(index)">
            선택
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
