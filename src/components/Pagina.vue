<template>
    <div>
        <Slider texto="Página de pruebas"/>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Página</h2>
                <h3>parámetro: {{ id_desde_url }}</h3>
                <button @click="actualizarNombre()">Actualizar nombre</button>
                <h4>nombre: {{ nombre }}</h4>    
                <button @click="irAlBlog()">Ir al blog</button>    
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
    name: 'Pagina',
    components: {
        Sidebar,
        Slider
    },
    created(){
        console.log('componente creado');
    },
    mounted() {
        this.id_desde_url = this.$route.params.id;
        console.log('componente montado');
    },
    updated() {
        console.log('compoenente actualizado');
    },
    destroyed() {
        console.log('componente eliminado');
    },
    data() {
        return {
            id_desde_url: null,
            nombre: 'olmedo'
        }
    },
    methods: {
        actualizarNombre(){
            this.nombre = 'JESÜS'           
        },
        irAlBlog(){
            this.$router.push('/blog')
        }
    }
}
</script> 