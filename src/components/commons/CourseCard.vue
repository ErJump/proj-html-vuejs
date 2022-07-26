<template>
  <div class="col-4 p-3">
    <div class="ms_card rounded-4">
      <img class="img-fluid" :src="completeImgPath(course.image)" :alt="course.title">
      <div class="p-3">
        <h4 class="mb-2">${{course.cost[0]}}.<span class="ms_font_custom_size">{{course.cost[1]}}</span></h4>
        <h5 class="w-75 mb-5">{{course.title}}</h5>
        <div class="ms_secondary_color">
          <i class="fa-solid fa-file-lines me-2"></i>
          <span class="me-4">{{course.lessons}} Lesson<span v-if="course.lessons > 1">s</span></span>
          <i class="fa-solid fa-user me-2"></i>
          <span>{{course.students}} Students</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {
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
div>h4{
  color: $brandColor;
}
div>h5{
  color: $textPrimaryColor;
}

.ms_card{
  transition: .5s;
  &:hover{
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.8);
  }
}
</style>
