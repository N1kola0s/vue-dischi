<template>

  <header id="site_header" class=" bg_header d-flex align-items-center">
    <div class="logo mx-3">
      <img src="../assets/logo_spotify.png" alt="logo">
    </div>
    <!-- /.logo -->
  </header>
  <!-- /#site_header -->

</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header{
      height: 50px;
      .logo{
        width: 36px;
        aspect-ratio: 1 / 1;
      }
        
  }
</style>
