<template>
<div style="margin: 0 0 0 50px">
  <h1>.vue 파일 하나에 전체 개발했을 떄</h1>
  Mouse position is at: {{ x }}, {{ y }}

  <hr />
  <h3>
 BasicComponent.vue 파일 내 코드
  </h3>
  <pre class="code-block">
    <code>
// composable 처리 없이 일반적으로 개발한 경우(.vue)에 스크립트 부분까지 모두 개발
// 템플릿 영역
...

// 스크립트 영역
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
    </code>
  </pre>
</div>
</template>


<script setup>
// composable 처리 없이 일반적으로 개발한 경우(.vue)에 스크립트 부분까지 모두 개발
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<style>
.code-block {
  background-color: #f4f4f4;
  margin: 0 auto;
  text-align: left;
  padding: 20px;
}
</style>