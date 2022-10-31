<template>
  <div id="app">
    <Header/>
    
      <!-- <LastArticles/> -->
      <router-view></router-view>
      
    <Footer/>
  </div>
</template>



<script>
import Header from './components/shared/Header.vue';
import Footer from './components/shared/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,   
    Footer
  }
}
</script>




<style>
@import './assets/css/style.css';
</style>
