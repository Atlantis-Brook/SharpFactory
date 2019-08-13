<template>
  <div id="app">
    <base-header v-show="!(path === $route.params.pathMatch || path === '/404')" />
    <router-view/>
    <base-footer v-show="!(path === $route.params.pathMatch || path === '/404')" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
     BaseHeader: Header,
     BaseFooter: Footer 
    },
  data(){
    return{
      path:''
    }
  },
  mounted(){
    this.path = this.$route.path;
  },
  watch:{
    $route(to,from){
      this.path = to.path;
    }
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
