import axios from './http';
import api from './api';

let obj = {}

for (let attr in api) {
  if (api.hasOwnProperty(attr)) {
    let { method, url } = api[attr];
    obj[attr] = (data, param) => {
      url = param ? url + '/' + param : url;
      if (method == 'get') {
        return axios[method](url, { param: data })
      } else {
        return axios[method](url, data)
      }
    }
  }
}

export default obj;
