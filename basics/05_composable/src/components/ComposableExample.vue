<template>
<div>
  <h1>컴포저블 composable 사용 예제</h1>
  Mouse position is at: {{ x }}, {{ y }}
  <hr />
  <h3>ComposableExampale.vue 파일 내 코드</h3>
  <pre class="code-block">
    <code>
// 스크립트 영역
import { useMouse } from '@/composable/useMouse';
const { x, y} = useMouse()
    </code>
  </pre>

  <h3>useMouse.js 파일 내 코드(컴포저블로 스크립트 분리)</h3>
  <pre class="code-block">
    <code>
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

    </code>
  </pre>
</div>
</template>


<script setup>
import { useMouse } from '@/composable/useMouse';
const { x, y} = useMouse()
</script>