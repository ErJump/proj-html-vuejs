<template>
  <div id="app">
    <HeaderMain/>
    <ContentMain/>
    <FooterMain/>    
  </div>
</template>

<script>
import ContentMain from './components/macro/ContentMain.vue'
import HeaderMain from './components/macro/HeaderMain.vue'
import FooterMain from './components/macro/FooterMain.vue'

export default {
  name: 'App',
  components: {
    ContentMain,
    HeaderMain,
    FooterMain
  }
}
</script>

<style lang="scss">

</style>
