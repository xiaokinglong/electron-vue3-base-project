<template>
  <div class="code-layout">
    <n-layout has-sider>
      <TopNav />
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="120"
        :width="240"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
      ></n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <div>
          count:
          <span>{{ count }}</span>
        </div>
        <button @click="handleChange">change</button>
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, computed } from "vue";
import { NSpace, NLayout, NLayoutSider, NLayoutContent } from 'naive-ui';
import TopNav from './components/TopNav/index'
import GlobalStore from "./store/index";

const store = GlobalStore();
const count = computed(() => store.count);
const handleChange = () => {
  store.setCount(store.count + 1);
}
</script>

<style lang="less">
.code-layout {
	width: 100%;
	height: 100%;
	.n-layout {
		width: 100%;
		height: 100%;
	}
}
</style>