<template>
  <div id="app">
    <base-header />
    <router-view/>
    <base-footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: { BaseHeader: Header, BaseFooter: Footer }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
</style>
