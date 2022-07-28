<template>
  <div class="row pt-4">
    <div  class="col-6 d-flex align-items-center">
      <div class="col-12 d-flex flex-column justify-content-around">
        <h5 class="text-uppercase ms_font_size_small w-75">i'm a wingman</h5>
        <h2 class="ms_font_family w-75 ms_font_size_big">Peace On Earth A Wonderful Wish <br/> But No Way</h2>
        <h6 class="w-75 ms_secondary_color">Success isn't overnight. It's when everyday you get a little better than the day before. It all adds up.</h6>
        <button class="w-50 ms_button">
          Get Started For Free 
          <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
    <div class="col-6 ms_jumbo d-flex justify-content-center">
      <img src="/img/home-movation-hero-image.png" alt="hero-image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumbotronHeader',
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_text_color{
  color: $textPrimaryColor;
}

.ms_jumbo{
  background-image: url(../../../public/img/home-movation-shape-face.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
}
.col-12.d-flex.flex-column.justify-content-around{
  height: 60%;
}

h6.w-75{
  line-height: 2rem;
  font-weight: 400;
}

h2.ms_font_family{
  line-height: 4.5rem;
  font-weight: 100;
}

</style>
