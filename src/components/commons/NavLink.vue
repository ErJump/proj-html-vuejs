<template>
  <li class="nav-item d-flex align-items-center position-relative">
    <a class="nav-link" :href="link.url">{{link.name}}</a>
    <i class="fa-solid fa-angle-down"></i>
    <div class="position-absolute ms_dropdown py-4 rounded shadow">
      <ul>
        <li v-for="sublink in link.sublinks" :key="sublink.id">
          <a :href="sublink.url">{{sublink.name}}</a>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      linkId: this.link.id,
    };
  },
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_primary_color{
  color: $textPrimaryColor;
}
.nav-item.d-flex.align-items-center{
  cursor: pointer;
  a{
    color: $buttonHoverColor!important;
    font-weight: 500;
    &:hover{
      color: $brandColor;
    }
  }
  i{
    font-size: .7rem;
    transform: translateX(-5px);
  }
  &:hover .ms_dropdown{
    display: block;
  }
}
ul{
  list-style: none;
  padding: 0;
}
.ms_dropdown{
  display: none;
  background-color: rgba(255,255,255,.5);
  top: 40px;
  width: 300px;
  left: 0;
  transform: translateX(-75px);
  li{
    padding: 5px 20px;
    a{
      color: $textPrimaryColor;
      text-decoration: none;
      &:hover{
        color: $brandColor;
      }
    }
  }
}

</style>
