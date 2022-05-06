<template>

  <header id="site_header" class=" bg_header d-flex align-item-center ">
      <nav class="d-flex align-items-center justify-content-between w-100 px-3">
          <div class="logo mx-3">
            <img src="../assets/logo_spotify.png" alt="logo">
          </div>
        <!-- /.logo -->

        <form class="d-flex justify-content-center align-items-center">
            <label class="px-3 text-white text-uppercase" for="">Seleziona Genere:</label>
            <select class="form-select" aria-label="Default select example " @change="select" v-model="select" placeholder="Generi Musicali">
              <option selected disabled>Generi musicali</option>
              <option value="">Tutti</option>
              <option value="Pop">Pop</option>
              <option value="Jazz">Jazz</option>
              <option value="Metal">Metal</option>
              <option value="Rock">Rock</option>
              <option value="HipHop">HipHop</option>
            </select>
        </form>
        
          
       
        
      </nav>
      <!-- /nav -->
   
  </header>
  <!-- /#site_header -->

</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    
  },
  data(){
    return{
      selectedValue:''
    }
  },
  methods:{
    select(){
      console.log(this.select)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  header{
      height: 50px;

      nav{

        .logo{
        width: 36px;
        aspect-ratio: 1 / 1;
        }

        select{
          width: 180px;
        }

      }
      
        
  }
</style>
