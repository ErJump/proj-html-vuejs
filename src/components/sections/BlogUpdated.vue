<template>
  <div class="container-lg pt-5">
    <h5 class="text-uppercase ms_secondary_color fs-6 mb-4">blog updated</h5>
    <h3 class="ms_font_family fs-1 ms_primary_color mb-4">
      Interesting <span class="ms_brand_color">articles updated</span> daily
    </h3>
    <div class="row">
      <BlogCard/>
    </div>
  </div>
</template>

<script>
import BlogCard from '../commons/BlogCard.vue';
export default {
    name: "BlogUpdated",
    components: { BlogCard }
}
</script>

<style scoped lang="scss">

</style>
