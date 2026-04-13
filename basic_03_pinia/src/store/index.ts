// typescript
import { defineStore } from "pinia";

// 인터페이스명은 대문자로 시작하는 것이 일반적이다.
interface TestObj {
  test: string;
}

// option api 방식
export const useTestStore = defineStore("test", {
  state: (): TestObj => {
    return {
      test: "테스트 스토어에 등록된 값",
    };
  },

  // getters는 state에 담겨진 값을 가공하거나 필터링 할 떄 주로 사용한다.
  getters: {
    getTestValue: (state: TestObj): string => state.test,
  },

  actions: {
    // payload: vue2 + vuex에서 주로 활용한 인자변수명 방식(payload: 화물)은 데이터를 화물로 비유하여 코드를 작성했다.
    // 실제변수명: vue3+pinia에서는 기존 payload 라는 명칭보다, 유지보수와 가독성을 위해 실제 변수명을 사용할 것을 권고/권장 하는 편이다. 특히 타입스크립트와 함께 사용할 때는 명확한 변수명을 쓰는 것이 좋다.
    // 다만 나는 vue2 버전부터 개발해온 개발자라... 무의식적으로 어딘가에 vue2 버전에서나 쓰던 코드 스타일이나 변수명이 있을 수 있으니, 그냥 그러려니 하고 큰 의미를 부여하지 않길 바란다.
    setValue(payload: string) {
      this.test = payload;
    },
  },
});

// setup api 방식이지만 현재 이 파일을 참조하고 있어서 코드를 주석처리 해둡니다.
// import { ref, computed } from "vue";
// import { defineStore } from "pinia";

// export const useTestStore = defineStore("test", () => {
//   // state
//   const test = ref<string>("테스트 스토어에 등록된 값");

//   // getters: setup api에서는 주로 computed를 사용하여 처리한다
//   const getTestValue = computed(() => test.value);

//   // actions
//   // 넘길 인자값이 없으면, 안넘기면 된다.
//   function setValue(inputTextValueFromTestStoreComponent: string) {
//     test.value = inputTextValueFromTestStoreComponent;
//   }

//     // 외부에서 접근해서 사용해야 하기 때문에 return 처리한다
//     return {
//         test,
//         getTestValue,
//         setValue
// }
// });
