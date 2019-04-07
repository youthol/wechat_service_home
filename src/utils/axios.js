import axios from "axios";
const errorHandle = (status, message) => {
  switch (status) {
    case 400:
      console.log("错误请求");
      break;
    case 401:
      console.log("未授权，请重新登录");
      break;
    case 403:
      console.log("拒绝访问");
      break;
    case 404:
      console.log("请求错误，未找到该资源");
      break;
    case 405:
      console.log("请求方法未允许");
      break;
    case 408:
      console.log("请求超时");
      break;
    case 500:
      console.log("服务端错误");
      break;
    case 501:
      console.log("网络未实现");
      break;
    case 502:
      console.log("网络错误");
      break;
    case 503:
      console.log("服务不可用");
      break;
    case 504:
      console.log("网络超时");
      break;
    case 505:
      console.log("HTTP版本不支持该请求");
      break;
    default:
      console.log(`ERROR:${message}`);
  }
};

const instance = axios.create();

instance.defaults.baseURL = "https://api.youthol.cn/api";
instance.defaults.timeout = 3000;
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
instance.defaults.headers.put["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// 响应拦截器
instance.interceptors.response.use(
  // 响应成功，对响应的数据进行操作
  response => response.data,
  // 响应报错，对错误进行操作
  error => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      console.log("连接到服务器失败");
      return Promise.reject();
    }
  }
);

export default instance;
