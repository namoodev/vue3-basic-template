<template>

  <button>
  <RouterLink to="/">Go To the Hello World Component</RouterLink>
</button>

<button>
  <RouterLink to="/test">Go To the Router Test Component</RouterLink>
</button>

<button>
  <RouterLink to="/parent">Go To the Parent Component</RouterLink>
</button>

<RouterView></RouterView>

</template>

<script>

export default {
  name: 'App',
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
