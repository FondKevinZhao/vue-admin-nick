import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 第三方包
import ElementUI from 'element-ui';
// 全局配置
// 在elementui样式之前引入重置样式
import '@/assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css';
import http from '@/api/config'
import './mock'
Vue.prototype.$http = http;
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
