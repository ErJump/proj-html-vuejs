<template>
  <li class="nav-item d-flex align-items-center">
    <a class="nav-link ms_primary_color" :href="link.url">{{link.name}}</a>
    <i class="fa-solid fa-angle-down"></i>
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
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_primary_color{
  color: $textPrimaryColor;
}
.nav-item.d-flex.align-items-center{
  a:hover{
    color: $brandColor;
  }
  &:hover{
    cursor: pointer;
  }
  i{
    font-size: .7rem;
    transform: translateX(-5px);
  }
}
</style>
