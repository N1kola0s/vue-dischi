<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    
  </div>
</template>

<script>
/* importo il componente Header del sito */
import SiteHeader  from '@/components/HeaderComponent.vue';

/* importo il componente Main del sito */
import SiteMain  from '@/components/MainComponent.vue';

/* import axios from "axios"; */

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain
  }
}
</script>

<style lang="scss">
/* importo lo stile */
  @import '@/assets/scss/style.scss';

</style>
