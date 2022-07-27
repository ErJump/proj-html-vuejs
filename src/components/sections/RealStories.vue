<template>
  <div class="container-fluid pt-5">
    <div class="row position-relative">
      <div class="col-6 ms_left_column d-flex justify-content-center align-items-center">
        <div class="d-flex flex-column align-items-center">
          <h5 class="text-uppercase ms_secondary_color fs-6 mb-5 ms_brand_color">real stories</h5>
          <span class="text-center fs-4 w-50 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, deleniti cumque, voluptas repellat assumenda culpa voluptates enim iure praesentium nihil sit amet veniam ratione optio pariatur? Numquam ad velit voluptatum!</span>
          <img class="ms_avatar mb-4" src="../../../public/img/testimonial-avata-02.jpg" alt="avatar">
          <span class="fs-5 mb-3">Mina Hollace</span>
          <span>/freelancer</span>
        </div>
      </div>
      <div class="col-6 ms_right_column">
        <img src="../../../public/img/home-movation-testimonial-image.jpg" alt="testimonial-image">
      </div>
      <div class="position-absolute ms_slider_menu d-flex flex-column justify-content-center">
        <i class="fa-solid fa-caret-up ms_secondary_color"></i>
        <span class="mb-2 mt-2">1/4</span>
        <i class="fa-solid fa-caret-down ms_secondary_color"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RealStories',
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_left_column{
  background-image: url(../../../public/img/background-pattern-wavify.png);
  background-color: $bgSecondaryColor;
}
.ms_right_column{
  padding: 0;
  &>img{
  object-fit: cover;
  width: 100%;
  }
}
.ms_avatar{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.ms_slider_menu{
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50px, -50px);
  &>*{
    text-align: center;
  }
}
</style>
