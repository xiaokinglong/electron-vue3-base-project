<template>
  <div>
    <!-- <n-switch :value="values.value" @update:value="switchUpdate">
      <template #checked>开启</template>
      <template #unchecked>关闭</template>
    </n-switch> -->
    <n-icon size="40" @click="() => values = true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 16 16"
      >
        <g fill="none">
          <path
            d="M8 6a2 2 0 1 0 0 4a2 2 0 0 0 0-4zM7 8a1 1 0 1 1 2 0a1 1 0 0 1-2 0z"
            fill="currentColor"
          />
          <path
            d="M10.618 4.398a.708.708 0 0 1-.824-.567l-.26-1.416a.354.354 0 0 0-.275-.282a6.072 6.072 0 0 0-2.519 0a.354.354 0 0 0-.275.282l-.259 1.416a.71.71 0 0 1-.936.538l-1.359-.484a.355.355 0 0 0-.382.095c-.569.627-1 1.367-1.262 2.173a.352.352 0 0 0 .108.378l1.102.931a.704.704 0 0 1 0 1.076l-1.102.931a.352.352 0 0 0-.108.378A5.986 5.986 0 0 0 3.53 12.02a.355.355 0 0 0 .382.095l1.36-.484a.708.708 0 0 1 .936.538l.258 1.416c.026.14.135.252.275.281a6.075 6.075 0 0 0 2.52 0a.353.353 0 0 0 .274-.281l.26-1.416a.71.71 0 0 1 .936-.538l1.359.484c.135.048.286.01.382-.095c.569-.627 1-1.367 1.262-2.173a.352.352 0 0 0-.108-.378l-1.102-.931a.703.703 0 0 1 0-1.076l1.102-.931a.352.352 0 0 0 .108-.378A5.985 5.985 0 0 0 12.47 3.98a.355.355 0 0 0-.382-.095l-1.36.484a.71.71 0 0 1-.111.03zm-6.62.58l.937.333a1.71 1.71 0 0 0 2.255-1.3l.177-.97a5.105 5.105 0 0 1 1.265 0l.178.97a1.708 1.708 0 0 0 2.255 1.3L12 4.977c.255.334.467.698.63 1.084l-.754.637a1.704 1.704 0 0 0 0 2.604l.755.637a4.99 4.99 0 0 1-.63 1.084l-.937-.334a1.71 1.71 0 0 0-2.255 1.3l-.178.97a5.099 5.099 0 0 1-1.265 0l-.177-.97a1.708 1.708 0 0 0-2.255-1.3L4 11.023a4.987 4.987 0 0 1-.63-1.084l.754-.638a1.704 1.704 0 0 0 0-2.603l-.755-.637c.164-.386.376-.75.63-1.084z"
            fill="currentColor"
          />
        </g>
      </svg>
    </n-icon>

    <n-drawer v-model:show="values" :width="502" placement="right">
      <n-drawer-content title="设置">
        <div>《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。</div>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { NSwitch, NDrawer, NDrawerContent,NIcon } from 'naive-ui';

const values = ref(false);
const switchUpdate = (value: boolean) => {
  console.log('12', value);
  values.value = value;
  console.log('12', values.value);
}
</script>