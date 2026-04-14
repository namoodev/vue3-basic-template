// options API

import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
  state: () => ({
    test: "스토어에 등록된 초기 데이터입니다.",
  }),
  actions: {
    setValue(payload) {
      this.test = payload;
    },
  },
});
