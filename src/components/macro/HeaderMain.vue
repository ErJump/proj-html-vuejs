<template>
  <div class="ms_header">
    <div class="container-lg">
      <div class="row justify-content-between align-items-center">
        <div class="col-2">
          <img class="img-fluid" src="../../../public/img/dark-logo.png" alt="logo">
        </div>
        <div class="col-6">
          <nav>
            <ul class="nav justify-content-around">
              <NavLink v-for="link in navLinks" :key="link.id"
              :link="link"/>
            </ul>
          </nav>
        </div>
        <div class="col-2 ms_social d-flex justify-content-around">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from "../commons/NavLink.vue";
export default {
    name: "HeaderMain",
    data() {
        return {
            navLinks: [
                {
                    name: "Home",
                    url: "#",
                    id: 1,
                },
                {
                    name: "Pages",
                    url: "#",
                    id: 2,
                },
                {
                    name: "Courses",
                    url: "#",
                    id: 3,
                },
                {
                    name: "Features",
                    url: "#",
                    id: 4,
                },
                {
                    name: "Blog",
                    url: "#",
                    id: 5,
                },
                {
                    name: "Shop",
                    url: "#",
                    id: 6,
                },
            ]
        };
    },
    components: { 
      NavLink, 
    },
}

</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_header{
  background-color: $bgSecondaryColor;
  padding: 20px;
  background-image: url(../../../public/img/background-pattern-wavify.png);
}
.ms_social>i{
  font-size: 1.5rem;
  &:hover{
    color: $brandColor;
    cursor: pointer;
  }
}
</style>
