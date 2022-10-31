<template>
    <article class="article-item" >
        <div class="image-wrap">
            <img :src="pelicula.image" :alt="pelicula.title" />
        </div>

        <h2>{{ pelicula.title }}</h2>
        <span class="date" v-bind:class="{
            yeargreen: pelicula.year > 2005,
            yearred: pelicula.year <= 2005,
        }">
            {{ pelicula.year }}
        </span>
        <a href="#">Leer más</a>

        <input type="button" value="Marcar favorita" @click="favorita( pelicula )">
        <div class="clearfix"></div>
    </article>
</template>



<script>
export default {
    name: 'Pelicula',


    props: ['pelicula'],

    methods: {
        favorita( pelicula ){
            console.log(pelicula);

            this.$emit('favorita', pelicula)
        }
    }
}
</script>