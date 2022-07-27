<template>
  <div class="container-lg pt-5">
    <div class="row mb-5">
      <div class="col-5">
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
      <div class="col-7">
        <div class="row">
          <BookCard v-for="book in books" :key="book.id"
          :book="book"/>
        </div>
      </div>
    </div>
    <div class="row align-items-center pt-5">
      <div v-for="client in clients" :key="client.id" class="col-2 ms_client d-flex justify-content-center">
        <img :src="completeImgPath(client.img)" class="img-fluid" :alt="client.img">
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "../commons/BookCard.vue";
export default {
  name: "BookStore",
  components: { BookCard },
  data: function() {
    return {
      books: [
        {
          title: "Beta man by Maxcoach",
          img: "product-book-11-400x400.jpg",
          price: [29,"00"],
          id: 1,
        },
        {
          title: "Fake man 4.0 by Maxcoach",
          img: "product-book-10-400x400.jpg",
          price: [39,"00"],
          id: 2,
        },
      ],
      clients: [
        {
          id: 1, 
          img: "client-logo-05-primary.png",
        },
        {
          id: 2, 
          img: "client-logo-06-primary.png",
        },
        {
          id: 3, 
          img: "client-logo-07-primary.png",
        },
        {
          id: 4, 
          img: "client-logo-04-primary.png",
        },
        {
          id: 5, 
          img: "client-logo-03-primary.png",
        },
        {
          id: 6, 
          img: "client-logo-02-primary.png",
        },
      ]
    }
  },
  methods: {
    completeImgPath: function(img) {
      return `/img/${img}`;
    },
  },
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
  width: 60%;
}
.ms_client{
  filter: grayscale(1);
  opacity: .4;
}
</style>
