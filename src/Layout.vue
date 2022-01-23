<template>
  <div class="code-layout">
    <n-layout has-sider>
      <!-- <TopNav /> -->
      <n-layout-sider
        collapse-mode="width"
        :collapsed-width="0"
        :width="240"
        show-trigger="arrow-circle"
        content-style="padding: 24px;"
        bordered
      >
        <div class="component-list">
          组件列表的显示区域,可以拖动
        </div>
      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">
        <Setting />
        <router-view></router-view>
      </n-layout-content>
    </n-layout>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, computed } from "vue";
import { NSpace, NLayout, NLayoutSider, NLayoutContent } from "naive-ui";
import GlobalStore from "./store/index";

import Setting from "./components/setting/index.vue";



const store = GlobalStore();
const count = computed(() => store.count);
const handleChange = () => {
  store.setCount(store.count + 1);
};
</script>

<style lang="less">
.code-layout {
  width: 100%;
  height: 100%;
  .n-layout {
    width: 100%;
    height: 100%;
  }
  .component-list {
    overflow: auto;
  }
}
</style>
