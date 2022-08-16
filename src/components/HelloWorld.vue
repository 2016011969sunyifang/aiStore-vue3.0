<template>
  <!-- <n-data-table
    :columns="columns"
    :data="bData"
    :max-height="250"
    :scroll-x="1800"
    virtual-scroll
  /> -->
  <div>ip地址为:{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// ts-ignore
const data = returnCitySN["cip"];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
</script>
