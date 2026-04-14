<template>
<div>
 useMouse() 사용 : {{ x }}, {{ y }}
</div>
<div>
  플러그인 없이 코드 개발: {{ oldX }}, {{ oldY }}
</div>

<h3>스크립트 코드</h3>
<pre class="code-block">
<code>
import { useMouse } from '@vueuse/core';
import { ref, onMounted, onUnmounted } from 'vue';

// vueuse 플러그인을 사용하여 코드 단순화 및 vue 사이클에 맞게 쉽고 빠르게 사용 가능
// 아래 코드를 한줄로 사용할 수 있다. (메모리 누수까지 모두 알아서 관리)
const { x, y } = useMouse()

/**
 * vueuse 플러그인 없이 개발할 때 코드
 * ---여기서부터
 */
const oldX = ref(0)
const oldY = ref(0)
onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition)
})

// 플러그인 없이 window 이벤트를 생성하면, 메모리 누수 방지를 위해 이벤트를 삭제해야한다.
onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition)
})
const updateMousePosition = (event) => {
  oldX.value = event.x
  oldY.value = event.y
}
/** ---여기까지 */
</code>
</pre>
</template>

<script setup>
import { useMouse } from '@vueuse/core';
import { ref, onMounted, onUnmounted } from 'vue';

// vueuse 플러그인을 사용하여 코드 단순화 및 vue 사이클에 맞게 쉽고 빠르게 사용 가능
// 아래 코드를 한줄로 사용할 수 있다. (메모리 누수까지 모두 알아서 관리)
const { x, y } = useMouse()

/**
 * vueuse 플러그인 없이 개발할 때 코드
 * ---여기서부터
 */
const oldX = ref(0)
const oldY = ref(0)
onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition)
})

// 플러그인 없이 window 이벤트를 생성하면, 메모리 누수 방지를 위해 이벤트를 삭제해야한다.
onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition)
})
const updateMousePosition = (event) => {
  oldX.value = event.x
  oldY.value = event.y
}
/** ---여기까지 */
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
}

.code-block {
  background-color: #f4f4f4;
  width: 50%;
  margin: 0 auto;
  text-align: left;
  padding: 20px;
}
</style>
