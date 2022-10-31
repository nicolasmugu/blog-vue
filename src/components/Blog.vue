<template>
    <div>
        <Slider
        texto="Blog"/>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Blog</h2>

                <div id="articles" v-if="articles">
                    <Articles :articles="articles"/>
                </div>
            </section>
            </div>
            <Sidebar/>        
        <div class="clearfix"></div>
    </div>
</template>

<script>
import Sidebar from './shared/Sidebar';
import Slider from './shared/Slider';
import Axios from 'axios';
import {Global} from '../Global';
import Articles from './Articles';



export default {
    name: 'Blog',
    components: {
        Slider,
        Sidebar,
        Articles
    },
    mounted(){
        this.getArticles();
    },
    data(){
        return {

            articles: []
        }
    },
    methods: {
        getArticles(){
            var url = Global.url + '/articles';
            Axios.get(url)
            .then( res => {

                if(res.data.status === 'success'){
                    this.articles = res.data.articles
                    // console.log(this.articles);
                }
            }).catch( err => {
                console.log(err);
            })
        }
    }
}
</script>