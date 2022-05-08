<template>

  <header id="site_header" class=" bg_header d-flex align-item-center ">
      <nav class="d-flex align-items-center justify-content-between w-100 px-3">
          <div class="logo mx-3">
            <img src="../assets/logo_spotify.png" alt="logo">
          </div>
        <!-- /.logo -->

        <div class="selectors d-flex">

          <div class="artist_selector d-flex text-white text-uppercase align-items-center px-3 " >
            <label class="w-50">Seleziona Artista:</label>
            <select v-model="selectedAuthors" @change="selectorAuthor" class="form-select w-50" aria-label="Default select example ">
                <option selected disabled>Seleziona Artista</option>
                <option value="">Tutti</option>
                <option value="Dave Weckl">Dave Weckl</option>
                <option value="Metallica">Metallica</option>
                <option value="Deep Purple">Deep Purple</option>
                <option value="Eric Clapton">Eric Clapton</option>
                <option value="Sting">Sting</option>
                <option value="Queen">Queen</option>
                <option value="Bon Jovi">Bon Jovi</option>
                <option value="Iron Maiden">Iron Maiden</option>
                <option value="Steve Gadd Band">Steve Gadd Band</option>
                <option value="Michael Jacjson">Michael Jacjson</option>
                
            </select>
          </div>
          
          <!-- utilizzo il componente figlio select nel componente genitore Header--> 
          <!-- imposto la direttiva v-model bindata sul valore (Stringa) di selctedValue  -->
          <!-- imposto l'evento 'select'. Quando questo evento viene emesso passerà al genitore il valore del componente figlio grazie alla funzione $emit-->
          <SelectComponent v-model="selectedValue" @changeSelect="select" /> 
      
        </div>

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
      selectedValue:'',
      selectedAuthors:''
    }
  },
  methods:{
    select(){
      /* console.log(this.select) */
      state.selectedValue = this.selectedValue;
      /* console.log(state.selectedValue); */
    },
    selectorAuthor(){
     /* console.log(this.selectedAuthors) */
     state.selectedAuthors = this.selectedAuthors
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
