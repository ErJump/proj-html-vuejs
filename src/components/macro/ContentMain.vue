<template>
  <div>
    <ImpressionsMain/>
    <AboutMe class="mb-5"/>
    <OnlineCourses class="mb-5"/>
    <BookStore class="mb-5"/>
    <RealStories class="mb-5"/>
    <BlogUpdated/>
  </div>
</template>

<script>
import ImpressionsMain from '../sections/ImpressionsMain.vue';
import AboutMe from '../sections/AboutMe.vue';
import OnlineCourses from '../sections/OnlineCourses.vue';
import BookStore from '../sections/BookStore.vue';
import RealStories from '../sections/RealStories.vue';
import BlogUpdated from '../sections/BlogUpdated.vue';
export default {
  name: "ContentMain",
  components: {
    ImpressionsMain,
    AboutMe,
    OnlineCourses,
    BookStore,
    RealStories,
    BlogUpdated
  },
}
</script>

<style scoped lang="scss">

</style>
