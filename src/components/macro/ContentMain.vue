<template>
  <div>
    <ImpressionsMain/>
    <AboutMe class="mb-5"/>
    <OnlineCourses/>
    <BookStore/>
  </div>
</template>

<script>
import ImpressionsMain from '../sections/ImpressionsMain.vue';
import AboutMe from '../sections/AboutMe.vue';
import OnlineCourses from '../sections/OnlineCourses.vue';
import BookStore from '../sections/BookStore.vue';
export default {
  name: "ContentMain",
  components: {
    ImpressionsMain,
    AboutMe,
    OnlineCourses,
    BookStore
  },
}
</script>

<style scoped lang="scss">

</style>
