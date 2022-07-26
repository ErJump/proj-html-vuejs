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
@import "~bootstrap/dist/css/bootstrap.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css");

/* *{
  outline: 1px solid red;
} */
</style>
