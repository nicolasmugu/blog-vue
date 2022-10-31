<template>
    <div>
        
        <div class="center">
            <section id="content">
                <h2 class="subheader">Películas</h2>
                
                <div v-if="favorita">
                    <h3>Película favorita: {{ favorita.title | mayusculas }}</h3>
                </div>
                <!--Listado articulos-->
                <div id="articles">
                    <!-- v-for="pelicula in peliculas" v-bind:key="pelicula.title" -->
                    <div v-for="pelicula in peliculas" v-bind:key="pelicula.title">
                        <Pelicula :pelicula="pelicula" v-on:favorita="marcarFavorita"/>
                    </div>        

                </div>            
            </section>
            <Sidebar/>
            
            <div class="clearfix"></div>
        </div>
    </div>
</template>



<script>
import Pelicula from './Pelicula.vue';
import Sidebar from './shared/Sidebar';


export default {
    name: 'Peliculas',
    components: {
        Pelicula,
        Sidebar,        
    },
    methods: {
        marcarFavorita( pelicula ) {
            this.favorita = pelicula;
            // console.log(pelicula);
            // alert('se ha ejcutado el evento en el padre')
        }
    },
    // computed: {
    //     peliculasMayusculas(){
    //         var peliculasMod = this.peliculas;
    //         for(var i = 0; i < this.peliculasMod.length; i++){
    //             this.peliculasMod[i].title = this.peliculasMod[i].title.toUpperCase(); 
    //         }
    //         return peliculasMod;
    //     }
    // },
    filters:{
        mayusculas(value){
            return value.toUpperCase();
        }
    },
    data() {
        return {
            favorita: null,
            peliculas: [
                { title: 'batman vs superman', year: 2017, image: 'https://www.cinemascomics.com/wp-content/uploads/2020/06/snyder-cut-batman-vs-superman-960x560.jpg' },
                { title: 'bob esponja', year: 2020, image: 'https://media.elestimulo.com/2019/11/Bob-Esponja-pel%C3%ADcula--1012x572.jpg' },
                { title: '300', year: 2005, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZsAD6x74bJ0_CFmEqg7aDVhmEgUCuMXCgWw&usqp=CAU' },
            ]
        }
    }
}
</script>