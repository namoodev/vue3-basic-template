<template>
  <div style="display: flex; justify-content: center;">
    <ComposableExample></ComposableExample>
    <BasicComponent></BasicComponent>
  </div>

</template>


<script>
import BasicComponent from './components/BasicComponent.vue';
import ComposableExample from './components/ComposableExample.vue';

export default {
  name: 'App',
  components: {
    ComposableExample,
    BasicComponent
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
