<template>
  <div v-scrollanimation class="col-6 d-flex flex-column align-items-center justify-content-around position-relative">
    <img class="img-fluid mb-3" :src="completeImgPath(book.img)" :alt="book.title">
    <h5 class="w-50 mb-4 text-center">{{book.title}}</h5>
    <h4 class="mb-2 ms_brand_color">${{book.price[0]}}.<span class="ms_font_custom_size">{{book.price[1]}}</span></h4>
    <div class="ms_menu_hover position-absolute flex-column ms_secondary_color">
      <i class="fa-solid fa-magnifying-glass"></i>
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-heart"></i>
      <i class="fa-solid fa-signal"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data: function() {
    return {
      imgPath: "/img/",
    };
  },
  methods: {
    completeImgPath: function(img) {
      return `${this.imgPath}${img}`;
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_font_custom_size{
  font-size: 1.2rem;
}
div.col-6{
  cursor: pointer;
  &:hover > div{
    opacity: 1;
  }
}
.ms_menu_hover{
  opacity: 0;
  transition: .5s;
  display: flex;
  top: 55px;
  right: 30px;
  i{
    background-color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: .5s;
    &:hover{
      color: $brandColor;
    }
  }
}
.enter{
  animation: slide-in-right 1s;
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

</style>
