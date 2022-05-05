<template>

    <main id="site_main" class="bg_main">

        <section class="albums" v-if="!loading">
                <div class="container h-100 p-5">
                    <div class="row row-cols-5 h-100">
                           <MusicList :music="album" v-for="(album, index) in albums" :key="index" />
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
import MusicList from '@/components/MusicListComponent.vue';
import axios from "axios"; 

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
        methods:{},
        mounted(){
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
                    
            
        }
        
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    main{
            height: calc(100% - 50px);   
        }
</style>