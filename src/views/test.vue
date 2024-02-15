
<script setup lang="ts">
import SearchTable from '@/layout/pages/SearchTable.vue';
// import DivideInTow from '@/layout/pages/DivideInTwo.vue';

</script>
<template>
  <div class="h-full w-full relative overflow-y-auto">
    <!-- <DivideInTow>
      <template #header>
        DB 기본 항목
      </template>

      <template #left-title>
        입력 항목
      </template>
      <template #left>
        왼쪽
      </template>

      <template #right-title>
        기본 설정
      </template>
      <template #right>
        오른쪽
      </template>
    </DivideInTow> -->

    <SearchTable>
      <template #header>
        서비스 신청 관리
      </template>

      <template #searchArea>
        <span>검색 결과 1,234 건</span>

        <div>
        </div>
      </template>

      <template #tableArea>
        테스트테스트 테스트
      </template>
    </SearchTable>
  </div>
</template>