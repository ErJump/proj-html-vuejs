<template>
  <div class="position-fixed ms_menu shadow rounded">
    <div class="row">
      <div class="col-2 d-flex flex-column gap-4 align-items-center justify-content-center">
        <i class="fa-solid fa-ruler"></i>
        <i class="fa-solid fa-circle-dot"></i>
        <i class="fa-solid fa-book"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
      <div class="col-10 d-none">
        <img class="img-fluid" src="/img/homepages-mega-menu-image-alt.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuHeader',
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_menu{
  top: 200px;
  right: 0;
  padding: 20px;
  background: $bgMainColor;
  color: $textPrimaryColor;
  z-index: 1;
  i{
    cursor: pointer;
    transition: .5s;
    &:hover{
      color: $brandColor;
    }
  }
  &:hover .col-10{
    display: block!important;
  }
}
div.col-10{
  animation: slide-in-right .5s;
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
