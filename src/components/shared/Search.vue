<template>
    <div>
        <Slider
        texto="Búsqueda"/>
        <div class="center">
            <section id="content">

                <div id="articles" v-if="articles">
                    <Articles :articles="articles"/>
                </div>
                <div v-else>
                    <h2>No hay artículos para mostrar para: <strong>{{termino}}</strong></h2>
                </div>
            </section>
            </div>
            <Sidebar/>        
        <div class="clearfix"></div>
    </div>
</template>

<script>
import Sidebar from './Sidebar';
import Slider from './Slider';
import Axios from 'axios';
import {Global} from '../../Global';
import Articles from '../Articles';



export default {
    name: 'Search',
    components: {
        Slider,
        Sidebar,
        Articles
    },
    mounted(){
        this.termino = this.$route.params.termino;
        this.getArticles(this.termino);
    },
    data(){
        return {
            termino: null,
            articles: null
        }
    },
    methods: {
        getArticles(termino){
            var url = Global.url + '/articles/search/' + termino;
            Axios.get(url)
            .then( res => {

                if(res.data.status === 'success'){
                    this.articles = res.data.articles
                    // console.log(this.articles);
                }
            }).catch( err => {
                console.log(err.response.data);
            })
        }
    }
}
</script>