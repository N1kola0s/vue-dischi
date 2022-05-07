<template>

  <header id="site_header" class=" bg_header d-flex align-item-center ">
      <nav class="d-flex align-items-center justify-content-between w-100 px-3">
          <div class="logo mx-3">
            <img src="../assets/logo_spotify.png" alt="logo">
          </div>
        <!-- /.logo -->
        
        <!-- utilizzo il componente figlio select nel componente genitore Header--> 
        <!-- imposto la direttiva v-model bindata sul valore (Stringa) di selctedValue  -->
        <!-- imposto l'evento 'select'. Quando questo evento viene emesso passerà al genitore il valore del componente figlio grazie alla funzione $emit-->
        <SelectComponent v-model="selectedValue" @changeSelect="select" /> 
    
      </nav>
      <!-- /nav -->
   
  </header>
  <!-- /#site_header -->

</template>

<script>
//importo il componente SelectComponent nel tag script del componente Main
import SelectComponent from '@/components/SelectComponent.vue'
//importo il modulo state nel tag script del componente Main
import state from "@/state.js";

export default {
  name: 'HeaderComponent',
  //definisco il componente SelectComponent
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
      /* console.log(this.select) */
      state.selectedValue = this.selectedValue;
      /* console.log(state.selectedValue); */
    }
  }
}
</script>

<style lang="scss">
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
