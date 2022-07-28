<template>

  <div class="position-fixed ms_menu shadow rounded">
    <div class="row">
      <div class="col-1 d-flex align-items-center justify-content-center me-1">
        <i v-if="!isVisible" @click="toggleMenu()" class="fa-solid fa-caret-left"></i>
        <i v-else @click="toggleMenu()" class="fa-solid fa-caret-right"></i>
      </div>
      <div class="col-2 d-flex flex-column gap-4 align-items-center justify-content-center py-4">
        <i class="fa-solid fa-ruler"></i>
        <i class="fa-solid fa-circle-dot"></i>
        <i class="fa-solid fa-book"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
      <transition name="slide">
        <div v-if="isVisible" class="col-8 py-4">
          <img @click="activeImg = 1" class="img-fluid" :src="imgsList[activeImg].img" alt="">
        </div>
      </transition>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MenuHeader',
  data: function() {
    return {
      isVisible: false,
      activeImg: 0,
      imgsList: [
        {
          id: 1,
          img: '/img/homepages-mega-menu-image-alt.jpg',
          alt: 'premium',
        },
        {
          id: 2,
          img: 'https://www.postitivita.it/wp-content/uploads/2021/04/Nyan-cat-NFT.gif',
          alt: 'easterEgg',
        }
      ]
    };
  },
  methods: {
    toggleMenu: function() {
      this.isVisible = !this.isVisible;
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_menu{
  top: 200px;
  right: 0;
  padding: 0 20px;
  background: $bgMainColor;
  color: $textPrimaryColor;
  z-index: 1;
  i{
    color: $textSecondaryColor;
    cursor: pointer;
    transition: .5s;
    &:hover{
      color: $brandColor;
    }
  }
  img{
    cursor: pointer;
  }
}

div.col-1{
  border-right: 1px solid $textSecondaryColor;
}
div.col-2{
  transform: translateX(10px);
}
.slide-enter-active{
  animation: slide-in-right 1s;
}

.slide-leave-active{
  animation: slide-in-right 1s reverse;
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
