<template>
  <div class="container-lg py-5">
    <h5 class="text-uppercase fs-6 ms_color_brand mb-4">About Me</h5>
    <div class="row mb-5">
      <div class="col-6">
        <h2 class="ms_font_family ms_font_size_big">How to Be a Beta Toxic Male: The 15 Habits of True Betas</h2>
      </div>
      <div class="col-6">
        <h5 class="fs-5 ms_line_height mb-4">
          Want to learn how to be <span class="ms_color_brand">a beta toxic male</span>? How to be more toxic? How to be the idiot you've always wanted to be?
        </h5>
        <span class="ms_secondary_color">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas, voluptatibus fugiat placeat saepe, ducimus omnis dolorum corrupti illum veniam ratione repellendus quidem iure minima ipsum eaque nulla eum delectus.</span>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-8">
        <iframe class="rounded shadow" SameSite=Strict width="90%" height="500px" src="https://www.youtube.com/embed/EZEfN5z8Mlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="col-4 d-flex align-items-center">
        <div class="">
          <h4 class="ms_font_family ms_line_height_bigger mb-5">"I'm scared to get close, and I hate being alone. I long for that feeling to not feel at all, the higher I get, the lower I'll sink. I can't drown my demons, they know how to swim"</h4>
          <img class="mb-3" src="/img/home-movation-shape-01.png" alt="shape">
          <h5>Oliver Sykes</h5>
          <span class="text-uppercase ms_font_size_small">wingman</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
}
</script>

<style scoped lang="scss">
@import "../../assets/styles/variables.scss";

.ms_color_brand{
  color: $brandColor;
}
.ms_line_height{
  line-height: 2rem;
}
.ms_line_height_bigger{
  line-height: 2.5rem;
}
</style>
