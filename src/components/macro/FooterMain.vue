<template>
  <footer class="py-5">
    <div class="container-lg">
      <div class="row pt-5">
        <div class="col-6 d-flex flex-column">
          <h5 class="text-white mb-4">Address</h5>
          <span>382 NE 191st St # 87394 Miami, FL 33179-3899</span>
          <span>+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</span>
          <span>support@maxcoach.com</span>
          <div class="pt-4">
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
        <div class="col-6 row">
          <div class="col-6">
            <h5 class="text-white mb-4">Explore</h5>
            <div class="row">
              <div class="col-6">
                <ul>
                  <li v-for="(link, index) in sliceLinks[0]" :key="index">
                    <a :href="link.href">{{link.title}}</a>
                  </li>
                </ul>
              </div>
              <div class="col-6">
                <ul>
                  <li v-for="(link, index) in sliceLinks[1]" :key="index">
                    <a :href="link.href">{{link.title}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-6">
            <h5 class="text-white mb-4">Information</h5>
            <ul>
              <li v-for="(info, index) in informations" :key="index">
                <a :href="info.href">{{info.title}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterMain',
  data: function() {
    return {
      links: [
        {
          title: 'Start here',
          href: '#',
        },
        {
          title: 'Blog',
          href: '#',
        },
        {
          title: 'About us',
          href: '#',
        },
        {
          title: 'Success story',
          href: '#',
        },
        {
          title: 'Courses',
          href: '#',
        },
        {
          title: 'Contact us',
          href: '#',
        },
      ],
      informations: [
        {
          title: 'Membership',
          href: '#',
        },
        {
          title: 'Purchase guide',
          href: '#',
        },
        {
          title: 'Privacy policy',
          href: '#',
        },
        {
          title: 'Terms of service',
          href: '#',
        },
      ],
    };
  },
  computed: {
    sliceLinks: function() {
      return [this.links.slice(0,3), this.links.slice(3)];
    },
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

footer{
  background-color: $textPrimaryColor;
}
div.col-6>span, div.col-6>div{
  color: $footerTextColor;
  margin-bottom: 15px;
  &>i{
    font-size: 1.5rem;
    margin-right: 20px;
    cursor: pointer;
  }
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
  color: $footerTextColor;
  li{
    margin-bottom: 15px;
    a{
      color: $footerTextColor;
      text-decoration: none;
      &:hover{
        color: $brandColor;
      }
    }
  }
}
</style>
