<template>
  <div class="home">
    <div>
      count:
      <span>{{ count }}</span>
    </div>
    <button @click="handleChange">change</button>
    <codePreview />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import GlobalStore from "../../store/index";
import codePreview from "../../components/preview/index.vue";
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