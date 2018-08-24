import Vue from 'vue'
import App from './App.vue'

// 引入路由模块
import VueRouter from 'vue-router'
// 引入index组件
import index from './components/index.vue'
// 使用路由中间件
Vue.use(VueRouter)

// 注册路由规则
const router = new VueRouter({
  routes :[
    { path: '/index', component: index },
  ]
})

// 引入css
import './assets/statics/site/css/style.css'

Vue.config.productionTip = false

new Vue({
  // 挂载到vue
  router,
  render: h => h(App),
}).$mount('#app')
