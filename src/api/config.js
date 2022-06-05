import axios from 'axios';

// 创建一个axios实例
const service = axios.create({
  // 请求超时时间
  timeout: 3000
});

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  // 失败的回调
  err => {
    console.log(err);
  }
);

service.interceptors.response.use (
  response => {
    let res = {}
    // 这里可以做判断(实际这里没做判断)，如果状态码是200或者0为成功的情况下才执行下面的代码
    res.status = response.status
    res.data = response.data
    return res;
  },
  // 失败的回调
  err => {
    console.log(err);
  }
)

export default service