<template>
    <div>
        <Slider/>
        <div class="center">

            <section id="content">

            <h1>Este es mi componente</h1>
            <h2>{{ subtitulo }}</h2>

            <hr/>
            <h2>Reactividad</h2>
            <input type="text" v-model="nombre"/>
            {{ nombre }}
            
            <hr/>
            <h2>Directivas condicionales</h2>
            <input type="number" v-model="edad"/>
            {{ edad }}

            <p v-if="edad && edad >= 18">Eres mayor de edad</p>
            <p v-else>Eres menor de edad</p>

            <hr/>
            <h2>Directivas Iterativa</h2>
            <ol>
                <li v-for="pelicula in peliculas" :key="pelicula" >{{ pelicula }}</li>
            </ol>
            </section>

            <Sidebar/>      
            <div class="clearfix"></div>  
        </div>
    </div>
</template>



<script>
import Sidebar from './shared/Sidebar';
import Slider from './shared/Slider';




export default {
    name: 'MiComponente',
    components: {
        Slider,
        Sidebar
    },
    data(){
        return {
            subtitulo: 'Subtitulo desde otro componente',
            nombre: 'Jesús',
            edad: 18,
            peliculas: ['batman', 'superman', 'spiderman']
        }
    }
}
</script>