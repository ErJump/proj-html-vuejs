<template>
  <div class="container-lg pt-4">
    <h5 class="text-uppercase text-center ms_secondary_color fs-6 mb-4">begin your journey at maxcoach</h5>
    <h3 class="ms_font_family ms_font_size_big ms_primary_color text-center mb-3">
      Latest <span class="ms_brand_color">Online Courses</span>
    </h3>
    <div class="row pt-5 mb-5">
      <CourseCard v-for="card in courses" :key="card.id" :course="card"/>
    </div>
    <div class="w-100 d-flex justify-content-center">
      <button @click="getAllCourses()" class="ms_button w-25">
        View all courses
        <i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  </div>
</template>

<script>
import CourseCard from '../commons/CourseCard.vue';
export default {
  name: "OnlineCourses",
  components: { CourseCard },
  data: function() {
    return {
      courses: [
        {
          title: "How to be BAD: Create A Growth Mindset For Toxicity",
          image: "motivation-course-06-480x298.jpg",
          cost: [30 , "00"],
          lessons: 3,
          students: 50,
          id: 1,
        },
        {
          title: "How to Build Confidence in Your Abilities",
          image: "motivation-course-05-480x298.jpg",
          cost: [30 , "00"],
          lessons: 1,
          students: 50,
          id: 2,
        },
        {
          title: "Fail Machine - Focus in a Distracted World",
          image: "motivation-course-04-480x298.jpg",
          cost: [20 , "00"],
          lessons: 5,
          students: 50,
          id: 3,
        },
        {
          title: "Effective Time Management Mastery - Complete Guide",
          image: "motivation-course-03-480x298.jpg",
          cost: [20 , "00"],
          lessons: 18,
          students: 50,
          id: 4,
        },
        {
          title: "Body Language Secrets Entrepreneurs",
          image: "motivation-course-02-480x298.jpg",
          cost: [25 , 99],
          lessons: 19,
          students: 50,
          id: 5,
        },
        {
          title: "Management Skills: The Science of a Jolly Cooperation",
          image: "motivation-course-01-480x298.jpg",
          cost: [19 , 99],
          lessons: 17,
          students: 50,
          id: 6,
        },
      ],
      allCourses: [
        {
          title: "Be a Nice Person",
          image: "motivation-course-02-480x298.jpg",
          cost: [1 , "00"],
          lessons: 10,
          students: 25,
          id: 7,
        },
        {
          title: "Enjoy Life Without Being Sigma",
          image: "motivation-course-04-480x298.jpg",
          cost: [25 , "00"],
          lessons: 1,
          students: 100,
          id: 8,
        },
        {
          title: "I'm Not In Danger, I Am The DANGER",
          image: "motivation-course-05-480x298.jpg",
          cost: [20 , "00"],
          lessons: 1,
          students: 60,
          id: 9,
        },
      ],
    }
  },
  methods: {
    getAllCourses: function() {
      this.allCourses.forEach(course => {
        this.courses.push(course);
      });
    },
  },
}
</script>

<style scoped lang="scss">

.text-uppercase.text-center.ms_secondary_color.fs-6{
  font-weight: 400;
}
</style>
