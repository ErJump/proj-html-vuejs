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
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
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
export default {
  name: 'HeaderMain',
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
