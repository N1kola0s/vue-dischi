<template>

    <main id="site_main" class="bg_main">

        <section class="albums" v-if="!loading">
                <div class="container h-100 p-5">
                    <div class="row row-cols-5 h-100">
                            <div class="col g-3 h-100" v-for="(album, index) in albums" :key="index" >
                                <div class="card bg_header p-3">
                                    <img :src="album.poster" :alt="album.title" class="card-img-top">
                                    <!-- card-img-top -->

                                    <div class="card-body text-center">
                                        <h5 class="card-title text-uppercase lh-0">{{album.title}}</h5>

                                        <div class="card-text py-4">

                                            <div class=album_title>
                                                {{album.author}}
                                            </div>
                                            <!-- /.album_title -->
                                            
                                            <div class="album_year">
                                                {{album.year}}
                                            </div>
                                            <!-- album_year -->
                                        </div>
                                        <!-- /.card-text -->                                     
                                    </div>
                                    <!-- /card-body -->
                                </div>
                                <!-- /.card -->
                            </div>
                            <!-- /.col -->
                    </div>
                    <!-- /.row -->
                </div>
                <!-- /.container -->
        </section>
        <!-- albums -->

    </main>

</template>

<script>
/* import MusicList from '@/components/MusicListComponent.vue'; */

import axios from "axios"; 

    export default {
        name: 'MainComponent',
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

                .card{
                color: #959595;
                max-height: 400px;
                /* text-transform: uppercase; */

                    .card-img-top{
                        object-position: top;
                        height: 200px;
                        aspect-ratio: 1 / 1;
                        object-fit: cover;

                        
                    }

                    .card-body{
                        padding: 1rem 0rem;

                            h5{
                            color:white;
                        }
                } 
                
            }
        }
</style>