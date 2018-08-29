import Vue from 'vue'
import App from './App.vue'

// 引入路由模块
import VueRouter from 'vue-router'
// 引入index组件
import index from './components/index.vue'
import goodsInfo from './components/goodsInfo.vue'
// 导入ui框架
import ElementUI from 'element-ui';
// 导入ui框架css
import 'element-ui/lib/theme-chalk/index.css';
// 导入懒加载插件
import VueLazyload from 'vue-lazyload'

// 导入axios模块 目的是让所有组件都可以使用
import axios from "axios";

// 挂载到vue的原型上->vue实例化出来的对象 公用  vue-resource this.$http
Vue.prototype.axios = axios;
axios.defaults.baseURL = 'http://47.106.148.205:8899';

// 使用路由中间件
Vue.use(VueRouter)
// 使用ui中间件
Vue.use(ElementUI);
//  使用懒加载中间件
Vue.use(VueLazyload,{
  // 图片当做资源来引入
  loading:require ('./assets/statics/img/01.gif'),
})


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
    {
      path:'/goodsInfo/:id',
      component:goodsInfo
    }
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
