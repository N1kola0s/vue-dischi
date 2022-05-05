<template>
  <header id="site_header">
    <nav class="bg_header d-flex align-items-center">
      <div class="logo mx-3">
        <img src="../assets/logo_spotify.png" alt="logo">

      </div>
      <!-- /.logo -->
    </nav>

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
nav{
  height: 50px;
    .logo{
      width: 36px;
      aspect-ratio: 1 / 1;
    }
      
}


</style>
