<template>

    <main id="site_main" class="bg_main">

        <section class="albums" v-if="!loading">
                <div class="container p-5">


                    <div class="row row-cols-5">
                           <MusicList :music="album" v-for="(album, index) in filteredAlbums" :key="index" />
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container -->
        </section>
        <!-- albums -->

        <!-- Bonus: Creare un componente loader da visualizzare fintantoché i risultati non sono pronti. -->
        
        <div class="loader d-flex min-vh-100 align-items-center justify-content-center text-white" v-else>
            <h1>loading ...</h1>
        </div>

    </main>

</template>

<script>
//importo il componente MusicList nel tag script del componente Main
import MusicList from '@/components/MusicListComponent.vue';
//importo axios nel tag script del componente Main
import axios from "axios"; 
//importo il modulo state nel tag script del componente Main
import state from "@/state.js";

    export default {
        name: 'MainComponent',
        components: {
            MusicList,
        },
        data(){
            return{
                url:'https://flynn.boolean.careers/exercises/api/array/music',
                albums: null,
                loading:true,
                error:null,
            };
        },
        methods:{
            callApi(){
                axios
                .get(this.url)
                .then(response => {
                    console.log(this);
                    console.log(response);

                    this.albums = response.data.response
                    /* console.log(this.albums) */
                    this.loading = false;
                    /* console.log(this.url) */
                })
                .catch(error => {
                    console.log(error);
                    this.error = `Ops! ${error.message}`
                });

            },
        },
        mounted(){
            this.callApi(); 
        },
        computed: {
            //filtro l'array albums nella computed property 'filteredAlbums' con l'oggetto reattivo 'state' per filtrare il genere musicale selezionato nel componente Header
            filteredAlbums(){
                //imposto una condizione che verifica se state.selectedValue non sia vuoto
                if(state.selectedValue){
                    //in caso positivo applicando filter all'array albums genero un nuovo array con i dati filtrati
                    return this.albums.filter(album =>{
                        //utilizzo state.selectedValue per filtrare i dati in modo da verificare che valore di state che corrisponde a ciò che verrà selezionato nel select del componente header (trasformati i suoi caratteri in formato minuscolo) siano inclusi come valore (stringa) nella proprietà dell'ogetto al percorso album.genre dell'array albums (trasformati i suoi caratteri in formato minuscolo).  
                        return album.genre.toLowerCase().includes(state.selectedValue.toLowerCase())
                    })
                } 

                if(state.selectedAuthors){
                    return this.albums.filter(album =>{
                        return album.author.toLowerCase().includes(state.selectedAuthors.toLowerCase())
                        })
                    
                }
                
                else  {
                    //in caso negativo, ossia che lo state.selectedValue sia vuoto, restituisco l'array di origine
                    return this.albums
                }
            }
        }
        
    };
</script>

<style lang="scss">
    main{
         min-height: calc(100vh - 100px);

         .artist_selector{
            /* width: 200px; */
            padding-bottom: 2rem;
         }

        }
</style>