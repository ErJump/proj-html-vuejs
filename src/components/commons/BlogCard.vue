<template>
  <div v-scrollanimation class="col-3">
    <img class="img-fluid rounded mb-4" :src="completeImgPath(article.img)" :alt="article.img">
    <div class="ms_secondary_color mb-3">
      <i class="fa-solid fa-calendar me-2"></i><span>{{article.date}}</span>
    </div>
    <h5 class="mb-3">{{article.title}}</h5>
    <span>{{article.preview}}</span>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    article: {
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
div.col-3{
  cursor: pointer;
}

.enter{
  animation: slide-in-fwd-center 2s;
}

@-webkit-keyframes slide-in-fwd-center {
  0% {
    -webkit-transform: translateZ(-1400px);
            transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes slide-in-fwd-center {
  0% {
    -webkit-transform: translateZ(-1400px);
            transform: translateZ(-1400px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}

</style>
