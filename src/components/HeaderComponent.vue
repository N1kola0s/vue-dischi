<template>

  <header id="site_header" class=" bg_header d-flex align-item-center ">
      <nav class="d-flex align-items-center justify-content-between w-100 px-3">
          <div class="logo mx-3">
            <img src="../assets/logo_spotify.png" alt="logo">
          </div>
        <!-- /.logo -->

        <SelectComponent v-model="selectedValue" @changeSelect="select" />
    
      </nav>
      <!-- /nav -->
   
  </header>
  <!-- /#site_header -->

</template>

<script>
import SelectComponent from '@/components/SelectComponent.vue'
/* src/components/SiteHeader.vue */
import state from "@/state.js";

export default {
  name: 'HeaderComponent',
  components:{
    SelectComponent,
},
  data(){
    return{
      selectedValue:''
    }
  },
  methods:{
    select(){
      console.log(this.select)
      state.selectedValue = this.selectedValue;
      console.log(state.selectedValue);
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
