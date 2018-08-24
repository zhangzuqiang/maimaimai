import Vue from 'vue'
import App from './App.vue'


// 引入css
import './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
