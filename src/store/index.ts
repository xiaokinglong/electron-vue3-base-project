import { defineStore } from "pinia";

const GlobalStore = defineStore({
  id: "globalState",
  state: () => ({
    count: 1,
  }),
  getters: {},
  actions: {
    setCount(count:number) {
      this.count = count;
    },
  },
});

export default GlobalStore;