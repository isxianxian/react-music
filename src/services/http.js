import axios from 'axios';
import { message } from 'antd';

axios.defaults.baseURL = 'http://localhost:4100';
axios.defaults.timeout = 100000;
// 请求前拦截 ==> 请求前要在header设置token权限
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    console.log("请求超时");
    return Promise.reject(err);
  }
);

// 返回后拦截
axios.interceptors.response.use(
  data => {
    data = data.data;
    if (!data.success) {
      message.error(data.msg)
    } else {
      return data;
    }
  },
  err => {
    if (!err.response) {
      // message.error(err);
      return;
    }
    if (err.response.status === 504 || err.response.status === 404) {
      console.log("服务器被吃了⊙﹏⊙∥");
    } else if (err.response.status === 401) {
      console.log("登录信息失效⊙﹏⊙∥");
    } else if (err.response.status === 500) {
      console.log("服务器开小差了⊙﹏⊙∥");
    }
    return Promise.reject(err);
  }
);


export default axios;