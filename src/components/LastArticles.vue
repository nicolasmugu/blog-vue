<template>
  <div>
    <Slider texto="Bienvenido a mi blog con Vue" home="true" />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>

        <!--Listado articulos-->

        <div id="articles" v-if="articles">
          <Articles :articles="articles" />
        </div>
      </section>
    </div>
    <Sidebar />

    <div class="clearfix"></div>
  </div>
</template>



<script>
import Axios from "axios";
import { Global } from "../Global";
import Sidebar from "./shared/Sidebar";
import Slider from "./shared/Slider";
import Articles from './Articles';

export default {
  name: "LastArticles",
  components: {
    Sidebar,
    Slider,
    Articles
  },
  mounted() {
    this.getArticles();
  },
  data(){
        return {

            articles: []
        }
    },
  methods: {
    getArticles() {
      var url = Global.url + "/articles/true";
      Axios.get(url)
        .then((res) => {
          if (res.data.status === "success") {
            this.articles = res.data.articles;
            console.log(this.articles);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
