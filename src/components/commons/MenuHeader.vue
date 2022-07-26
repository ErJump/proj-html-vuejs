<template>
  <div class="position-absolute ms_menu shadow rounded d-flex flex-column gap-4 align-items-center">
    <i class="fa-solid fa-ruler"></i>
    <i class="fa-solid fa-circle-dot"></i>
    <i class="fa-solid fa-book"></i>
    <i class="fa-solid fa-cart-shopping"></i>
  </div>
</template>

<script>
export default {
  name: 'MenuHeader',
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_menu{
  top: 200px;
  right: 0;
  padding: 10px;
  background: $bgMainColor;
  color: $textPrimaryColor;
}
</style>
