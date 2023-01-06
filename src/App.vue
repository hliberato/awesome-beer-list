<template>
  <div id="app">
    <HomeTemplate />
  </div>
</template>

<script>
import HomeTemplate from './components/templates/HomeTemplate.vue'

export default {
  name: 'app',
  components: {
    HomeTemplate
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
