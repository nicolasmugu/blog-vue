<template>
    <aside id="sidebar">
        <div id="nav-blog" class="sidebar-item">
            <h3>Puedes hacer esto</h3>
            <router-link to="/create-article" class="btn btn-success">Crear artículo</router-link>
        </div>

        <div id="search" class="sidebar-item">
                <h3>Buscador</h3>
                <p>Encuentra el artículo que buscas</p>
                <form @submit.prevent="buscarArticulo">
                    <input type="text" name="search"  v-model="termino"/>
                    <input type="submit" name="submit" value="Buscar" class="btn"/>
                </form>
        </div>
    </aside>
</template>



<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            termino: null
        }
    },
    methods: {
        buscarArticulo(){
            if(this.termino.length < 2){ return; }
            // console.log(this.termino);
            this.$router.push('/redirect/'+ this.termino);
        }
    }
}
</script>