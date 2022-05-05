<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="alert alert-success">This is a sweet success bootsrap message</div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
/* import axios from "axios"; */

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
/* importo lo stile */
  @import '@/assets/scss/style';

</style>
