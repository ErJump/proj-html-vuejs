<template>
  <div class="container-lg py-5 ">
    <div class="row justify-content-between">
      <div v-scrollanimation class="col-4 ms_bg d-flex flex-column align-items-center"
      v-for="impression in impressions" :key="impression.id">
        <h2 class="ms_color_brand fs-1">{{impression.value}}</h2>
        <h4 class="text-uppercase fs-6">{{impression.name}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImpressionsMain',
    data: function() {
      return {
        impressions: [
          {
            name: 'Finished Sessions',
            value: "1.926",
            id: 1,
          },
          {
            name: 'Satisfaction Rate',
            value: "100%",
            id: 2,
          },
          {
            name: 'Enrolled Learners',
            value: "3092+",
            id: 3,
          },
          {
            name: 'Online Instructors',
            value: "200",
            id: 4,
          },
        ],
      };
    },
  }
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_bg{
  background-image: url("../../../public/img/background-pattern-grid-line-06.png");
  background-repeat: repeat;
  width: 23%;
}
.ms_color_brand{
  color: $brandColor;
}

.enter{
  animation: tracking-in-expand 3s;
}

@-webkit-keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
@keyframes tracking-in-expand {
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>
