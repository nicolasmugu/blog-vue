import Vue from 'vue'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import VueRouter from 'vue-router';
import LastArticles from './components/LastArticles.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
import Pagina from './components/Pagina.vue';
import MiComponente from './components/MiComponente.vue';
import Peliculas from './components/Peliculas.vue';
import Article from './components/Article.vue';
import CreateArticle from './components/CreateArticle.vue';
import EditArticle from './components/EditArticle.vue';
import NoPageFound from './components/shared/NoPageFound.vue';
import Search from './components/shared/Search.vue';
import Redirect from './components/shared/Redirect.vue';



Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);

const moment = require('moment');
require('moment/locale/es')
Vue.use(require('vue-moment'), { moment });

const routes = [
  { path: '/',                  component: LastArticles },
  { path: '/create-article/',   component: CreateArticle , name: 'create'},
  { path: '/edit-article/:id',  component: EditArticle , name: 'edit'},
  { path: '/article/:id',       component: Article , name: 'article'},
  { path: '/blog',              component: Blog },
  { path: '/home',              component: LastArticles },
  { path: '/formulario',        component: Formulario },
  { path: '/mi-componente',     component: MiComponente },
  { path: '/search/:termino',   component: Search },
  { path: '/redirect/:termino', component: Redirect },
  { path: '/pagina/:id?',       component: Pagina,  name: 'pagina', },
  { path: '/peliculas',         component: Peliculas,  name: 'peliculas', },
  { path: '*',                  component: NoPageFound },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
