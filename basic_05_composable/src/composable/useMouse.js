import { ref, onMounted, onUnmounted } from "vue";

// 컴포저블은 접두사 'use'를 사용하여, 해당 파일 및 함수 등이 컴포저블이라는 것을 알린다.
export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  onMounted(() => window.addEventListener("mousemove", update));
  onUnmounted(() => window.removeEventListener("mousemove", update));

  return { x, y };
}
