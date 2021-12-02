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
      <n-layout-content content-style="padding: 24px;">平山道</n-layout-content>
    </n-layout>
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="transform"
        :collapsed-width="120"
        :width="240"
        show-trigger="bar"
        content-style="padding: 24px;"
        bordered
      >海淀桥</n-layout-sider>
      <n-layout-content content-style="padding: 24px;">平山道</n-layout-content>
    </n-layout>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import { NSpace, NLayout, NLayoutSider, NLayoutContent } from 'naive-ui';
import TopNav from './components/TopNav/index'
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