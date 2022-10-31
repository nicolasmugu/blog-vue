<template>
    <section>        
        <div v-if="articles && articles.length > 0">
            <article class="article-item" v-for="article in articles" :key="article._id">
                <div class="image-wrap">
                    <img :src="'http://localhost:3900/api/articles/get-image/'+ article.image" :alt="article.title" v-if="article.image"/>
                    <img src="../assets/img/no-img.png" :alt="article.title" v-if="!article.image"/>
                </div>

                <h2>{{article.title}}</h2>
                <span class="date">
                    {{article.date | moment("from","now")}}
                </span>
                <p>

                <router-link :to="{ name: 'article', params: { id: article._id}}">Leer más</router-link>
                </p>

                <div class="clearfix"></div>
            </article>
        </div>
        <div v-else>
            <h2>Cargando..</h2>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Articles',
    props: ['articles']
}
</script>