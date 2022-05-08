<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
    
  </div>
</template>

<script>
/* importo il componente Header del sito */
import SiteHeader  from '@/components/HeaderComponent.vue';

/* importo il componente Main del sito */
import SiteMain  from '@/components/MainComponent.vue';

/* importo il componente Main del sito */
import SiteFooter from '@/components/FooterComponent.vue'



export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  }
}
</script>

<style lang="scss">
/* importo lo stile */
  @import '@/assets/scss/style.scss';

</style>
