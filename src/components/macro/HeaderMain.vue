<template>
  <div class="ms_header position-relative" id="header">
    <div class="container-lg">
      <div class="row justify-content-between align-items-center mb-5">
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
      <JumbotronHeader/>
    </div>
    <MenuHeader/>
  </div>
</template>

<script>
import NavLink from "../commons/NavLink.vue";
import JumbotronHeader from "../sections/JumbotronHeader.vue";
import MenuHeader from "../commons/MenuHeader.vue";
export default {
  name: "HeaderMain",
  data() {
    return {
      navLinks: [
        {
          name: "Home",
          url: "#",
          id: 1,
          sublinks: [
            {
              name: "About Me",
              url: "#",
              id: 1,
            },
            {
              name: "Blog Updated",
              url: "#",
              id: 2,
            },
            {
              name: "Book Store",
              url: "#",
              id: 3,
            },
            {
              name: "Online Courses",
              url: "#",
              id: 4,
            },
            {
              name: "Real Stories",
              url: "#",
              id: 5,
            },
          ],
        },
        {
          name: "Pages",
          url: "#",
          id: 2,
          sublinks: [
            {
              name: "Business Coaching",
              url: "#",
              id: 1,
            },
            {
              name: "Gym Coaching",
              url: "#",
              id: 2,
            },
            {
              name: "Health Coaching",
              url: "#",
              id: 3,
            },
            {
              name: "Kitchen Coach",
              url: "#",
              id: 4,
            },
            {
              name: "Motivation Coaching",
              url: "#",
              id: 5,
            },
          ],
        },
        {
          name: "Courses",
          url: "#",
          id: 3,
          sublinks: [
            {
              name: "How to be BAD",
              url: "#",
              id: 1,
            },
            {
              name: "How to Build Confidence in Your Abilities",
              url: "#",
              id: 2,
            },
            {
              name: "Fail Machine - Focus in a Distracted World",
              url: "#",
              id: 3,
            },
            {
              name: "Effective Time Management Mastery",
              url: "#",
              id: 4,
            },
            {
              name: "Body Language Secrets Entrepreneurs",
              url: "#",
              id: 5,
            },
            {
              name: "Management Skills: The Science of a Jolly Cooperation",
              url: "#",
              id: 6,
            },
          ],
        },
        {
            name: "Features",
            url: "#",
            id: 4,
            sublinks: [
            {
              name: "Coaching",
              url: "#",
              id: 1,
            },
            {
              name: "Super Coaching",
              url: "#",
              id: 2,
            },
            {
              name: "Giga Grind Mindset",
              url: "#",
              id: 3,
            },
          ],
        },
        {
          name: "Blog",
          url: "#",
          id: 5,
          sublinks: [
            {
              name: "How to Stay True to Your Personal Brand",
              url: "#",
              id: 1,
            },
            {
              name: "5 Vital Lessons in 5 Years of Freelancing",
              url: "#",
              id: 2,
            },
            {
              name: "11 Super Useful Tips for Small-Business Owners",
              url: "#",
              id: 3,
            },
            {
              name: "How to Give Yourself Grace to Start Again",
              url: "#",
              id: 4,
            },
          ],
        },
        {
          name: "Shop",
          url: "#",
          id: 6,
          sublinks: [
            {
              name: "Beta man by Maxcoach",
              url: "#",
              id: 1,
            },
            {
              name: "Fake man 4.0 by Maxcoach",
              url: "#",
              id: 2,
            },
          ],
        },
      ],
    };
  },
  components: {
    NavLink,
    JumbotronHeader,
    MenuHeader,
  },
}

</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_header{
  background-color: $bgSecondaryColor;
  padding: 20px;
  background-image: url(../../../public/img/background-pattern-wavify.png);
  padding: 0;
  padding-top: 20px;
}
.ms_social>i{
  font-size: 1.5rem;
  cursor: pointer;
  transition: .5s;
  &:hover{
    color: $brandColor;
  }
}
</style>
