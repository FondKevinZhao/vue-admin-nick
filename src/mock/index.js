import Mock from 'mockjs';
import homeApi from './home'

// 模拟数据返回时间，设置200-2000毫秒延时
Mock.setup({
  timeout: '200-2000'
})

// 首页相关 - 拦截Ajax请求
// 这里拦截/home/getData的请求，拦截的是get方法，然后再调用homeApi.getHomeData。home.js中有这个方法，homeApi.getHomeData这个函数的返回值作为一个响应数据返回到Home.vue页面
Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData);
