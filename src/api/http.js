// 封装get，post方法
import axios from './index';

export function get(url, params) {
  return axios.get(url, { params });
}
export function post(url, params) {
  return axios.post(url, params);
}