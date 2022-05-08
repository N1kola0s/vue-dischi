<template>
    <div class="col g-3" >
        <div class="card bg_header p-3">
            <img :src="music.poster" :alt="music.title" class="card-img-top">
            <!-- card-img-top -->

            <div class="card-body text-center">
                <h5 class="card-title text-uppercase lh-0">{{music.title}}</h5>

                <div class="card-text py-4">

                    <div class=album_title>
                        {{music.author}}
                    </div>
                    <!-- /.album_title -->
                    
                    <div class="album_year">
                        {{music.year}}
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
    
</template>

<script>

export default {
    name:'MusicList',
    props:{
        music: Object
    }
};
</script>

<style lang="scss" scoped>

    .card{
        color: #959595;
        /* min-height: 400px; */
        
            .card-img-top{
                object-position: top;
                height: 200px;
                aspect-ratio: 1 / 1;
                object-fit: cover;
            }

            .card-body{
                padding: 1rem 0rem;

                .card-title{
                    height: 10px;
                    margin-bottom: 3rem;
                }

                    h5{
                    color:white;
                }
        } 
        
    }

</style>
