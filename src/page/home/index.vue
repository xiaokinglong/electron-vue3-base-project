<template>
  <div class="home">
    <div>
      count:
      <span>{{ count }}</span>
    </div>
    <button @click="handleChange">change</button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import GlobalStore from "../../store/index";

const store = GlobalStore();
const count = computed(() => store.count);
const handleChange = () => {
  store.setCount(store.count + 1);
}
</script>

<style lang="less">
.home {
  
}
</style>