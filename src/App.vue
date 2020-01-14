<template>
  <div id="app">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script>

import TheHeader from "./components/TheHeader.vue"


export default {
  name: "app",
  components: {
    TheHeader,
  }
};
</script>

<style>
</style>
