<template>
  <div class="container-lg pt-5">
    <h5 class="text-uppercase ms_secondary_color fs-6 mb-4">blog updated</h5>
    <h3 class="ms_font_family fs-1 ms_primary_color mb-5">
      Interesting <span class="ms_brand_color">articles updated</span> daily
    </h3>
    <div class="row">
      <BlogCard v-for="article in blogs" :key="article.id"
      :article="article"/>
    </div>
  </div>
</template>

<script>
import BlogCard from '../commons/BlogCard.vue';
export default {
  name: "BlogUpdated",
  components: { BlogCard },
  data: function() {
    return {
      blogs: [
        {
          title: "How to Stay True to Your Personal Brand",
          img: "motivation-blog-04-480x325.jpg",
          date: "May 13, 2020",
          preview: "When it comes to your business or career, you want...",
          id: 1,
        },
        {
          title: "5 Vital Lessons in 5 Years of Freelancing",
          img: "motivation-blog-03-480x325.jpg",
          date: "May 13, 2020",
          preview: "Being self-employed and working from home, it's easy to get...",
          id: 2,
        },
        {
          title: "11 Super Useful Tips for Small-Business Owners",
          img: "motivation-blog-02-480x325.jpg",
          date: "May 13, 2020",
          preview: "Being a small-business owner poses a ton of challanges. We...",
          id: 3,
        },
        {
          title: "How to Give Yourself Grace to Start Again",
          img: "motivation-blog-01-480x325.jpg",
          date: "May 13, 2020",
          preview: "Forgive yourself for vad habits you may have started or...",
          id: 4,
        },
      ],
    };
  },

}
</script>

<style scoped lang="scss">

</style>
