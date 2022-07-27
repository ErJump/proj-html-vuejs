<template>
  <div class="container-lg pt-5">
    <div class="row">
      <div class="col-6">
        <h5 class="text-uppercase ms_secondary_color fs-6 mb-4">book store online</h5>
        <h3 class="ms_font_family fs-1 ms_primary_color mb-4">
          Be Beta With <br> <span class="ms_brand_color">Wingman's Book</span>
        </h3>
        <ul class="mb-5">
          <li class="ms_secondary_color"><i class="fa-solid fa-check me-2 ms_brand_color"></i> Help you  understand yourself better</li>
          <li class="ms_secondary_color"><i class="fa-solid fa-check me-2 ms_brand_color"></i> Reveal mature tips</li>
          <li class="ms_secondary_color"><i class="fa-solid fa-check me-2 ms_brand_color"></i> Give the right advice</li>
          <li class="ms_secondary_color"><i class="fa-solid fa-check me-2 ms_brand_color"></i> Fascinating examples of beta man</li>
        </ul>
        <button class="ms_button">Get Free Ebook</button>
      </div>
      <div class="col-6">
        <BookCard/>
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "../commons/BookCard.vue";
export default {
    name: "BookStore",
    components: { BookCard }
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

ul{
  list-style: none;
  padding: 0;
  margin: 0;
  li{
    margin-bottom: .5rem;
  }
}
button.ms_button{
  width: 35%;
}
</style>
