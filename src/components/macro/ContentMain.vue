<template>
  <div>
    <ImpressionsMain/>
    <AboutMe/>
    <OnlineCourses/>
  </div>
</template>

<script>
import ImpressionsMain from '../sections/ImpressionsMain.vue';
import AboutMe from '../sections/AboutMe.vue';
import OnlineCourses from '../sections/OnlineCourses.vue';
export default {
  name: "ContentMain",
  components: {
    ImpressionsMain,
    AboutMe,
    OnlineCourses
  }
}
</script>

<style scoped lang="scss">

</style>
