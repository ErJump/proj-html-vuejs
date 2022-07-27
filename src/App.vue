<template>
  <div id="app">
    <HeaderMain class="mb-5"/>
    <ContentMain class="mb-5"/>
    <FooterMain/>    
  </div>
</template>

<script>
import ContentMain from './components/macro/ContentMain.vue'
import HeaderMain from './components/macro/HeaderMain.vue'
import FooterMain from './components/macro/FooterMain.vue'

export default {
  name: 'App',
  components: {
    ContentMain,
    HeaderMain,
    FooterMain
  }
}
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css");
@import "./assets/styles/variables.scss";

*{
  outline: 1px solid red;
}
.ms_font_family{
  font-family: 'Times New Roman', Times, serif;
}
.ms_button{
  background-color: $brandColor;
  color: $bgMainColor;
  border: none;
  border-radius: 5px;
  padding: 1rem 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all .3s ease-in-out;
  &:hover{
    background-color: $buttonHoverColor;
  }
}
.ms_font_size_small{
  font-size: .9rem;
}
.ms_font_size_big{
  font-size: 3.5rem;
}
.ms_primary_color{
  color: $textPrimaryColor;
}
.ms_secondary_color{
  color: $textSecondaryColor;
}
.ms_brand_color{
  color: $brandColor;
}
.ms_card{
  transition: .5s;
  cursor: pointer;
  &:hover{
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,.8);
  }
}

</style>
