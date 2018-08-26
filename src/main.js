import Vue from 'vue'
import App from './App.vue'

// 引入路由模块
import VueRouter from 'vue-router'
// 引入index组件
import index from './components/index.vue'
// 导入ui框架
import ElementUI from 'element-ui';
// 导入ui框架css
import 'element-ui/lib/theme-chalk/index.css';
// 使用路由中间件
Vue.use(VueRouter)
// 使用ui中间件
Vue.use(ElementUI);

// 注册路由规则
const router = new VueRouter({
  routes :[
    {
      path:'/',redirect:'index'
    },
    { 
      path: '/index',
      component: index
    },
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
