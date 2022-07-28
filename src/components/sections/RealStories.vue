<template>
  <div id="RealStories" class="container-fluid pt-5">
    <div class="row position-relative">
      <div class="col-6 ms_left_column d-flex justify-content-center align-items-center">
        <div class="d-flex flex-column align-items-center">
          <h5 class="text-uppercase ms_secondary_color fs-6 mb-5 ms_brand_color">real stories</h5>
          <span class="text-center fs-4 w-50 mb-5">{{stories[activeElement].content}}</span>
          <img class="ms_avatar mb-4" :src="completeImgPath(stories[activeElement].img)" :alt="stories[activeElement].img">
          <span class="fs-5 mb-3">{{stories[activeElement].name}}</span>
          <span>/ {{stories[activeElement].position}}</span>
        </div>
      </div>
      <div class="col-6 ms_right_column">
        <img src="/img/home-movation-testimonial-image.jpg" alt="testimonial-image">
      </div>
      <div class="position-absolute ms_slider_menu d-flex flex-column justify-content-center align-items-center">
        <i @click="goNext()" class="fa-solid fa-caret-up ms_secondary_color"></i>
        <span class="mb-2 mt-2">{{activeElement + 1}}/4</span>
        <i @click="goPrev()" class="fa-solid fa-caret-down ms_secondary_color"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RealStories',
  data: function() {
    return {
      activeElement: 0,
      stories: [
        {
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          name: "Mina Hollace",
          img: "testimonial-avata-02.jpg",
          position: "Freelancer",
        },
        {
          content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
          name: "Jerry Maxwell", 
          img: "testimonial-avata-01.jpg",
          position: "Designer",
        },
        {
          content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          name: "Walter White", 
          img: "testimonial-avata-03.jpg",
          position: "Teacher",
        },
        {
          content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          name: "Ted Green", 
          img: "testimonial-avata-04.jpg",
          position: "Businessman",
        },
      ],
    }
  },
  methods: {
    completeImgPath: function(img) {
      return `/img/${img}`;
    },
    goNext: function(){
      if (this.activeElement < this.stories.length - 1) {
        this.activeElement++;
      } else {
        this.activeElement = 0;
      }
    },
    goPrev: function() {
      if (this.activeElement > 0) {
        this.activeElement--;
      } else {
        this.activeElement = this.stories.length - 1;
      }
    },
  }
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
  &>i{
    cursor: pointer;
    &:hover{
      color: $brandColor;
    }
  }
}
</style>
