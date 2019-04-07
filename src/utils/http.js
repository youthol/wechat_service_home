import axios from './axios';

// axios封装
export default {

  get(url, params, headers) {
    // options是axios的请求配置，这里用来接收params和headers
    let options = {};
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.get(url, options);
  },

  post(url, data, params, headers) {
    let options = {};
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.post(url, data, options);
  },

  put(url, data, params, headers) {
    let options = {};
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.put(url, data, options);
  },

  delete(url, params, headers) {
    let options = {};
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.delete(url, options);
  }
};