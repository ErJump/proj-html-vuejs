<template>
  <div>
    <ImpressionsMain/>
    <AboutMe/>
  </div>
</template>

<script>
import ImpressionsMain from '../sections/ImpressionsMain.vue';
import AboutMe from '../sections/AboutMe.vue';
export default {
  name: "ContentMain",
  components: {
    ImpressionsMain,
    AboutMe,
  }
}
</script>

<style scoped lang="scss">

</style>
