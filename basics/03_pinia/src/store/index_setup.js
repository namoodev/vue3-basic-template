// setup API
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTestStore = defineStore("test", () => {
  const test = ref("스토어에 등록된 초기 데이터입니다.");

  const resetValue = computed(() => "reset:: " + test.value);

  function setValue(payload) {
    test.value = payload;
  }

  return { test, setValue, resetValue };
});
