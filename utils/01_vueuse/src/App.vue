<template>
  <h1>코어 샘플</h1>
  <CoreSample></CoreSample>
  <hr />
  <h1>컴포넌트 샘플</h1>
<ComponentsSample></ComponentsSample>
<hr />
<h1>수학 샘플</h1>
<MathSample></MathSample>
<hr />
<h1>메타데이터 샘플</h1>
<MetadataSample></MetadataSample>
<hr />
<h1>통합 샘플</h1>
<IntegrationsSample></IntegrationsSample>
</template>

<script setup>
import ComponentsSample from './components/ComponentsSample.vue';
import CoreSample from './components/CoreSample.vue';
import MathSample from './components/MathSample.vue';
import MetadataSample from './components/MetadataSample.vue';
import IntegrationsSample from './components/IntegrationsSample.vue';
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
