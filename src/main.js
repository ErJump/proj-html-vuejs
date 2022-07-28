import Vue from 'vue'
import App from './App.vue'
import ScrollAnimation from './directives/scrollanimation.js'

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
