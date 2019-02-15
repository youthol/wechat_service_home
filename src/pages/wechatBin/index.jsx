/*
 * 微信携带code回调至该页面
 * 从这里获取code（不需要渲染）
 */
import { binding } from "../../components/getCode";
import Axios from "axios";

const WechatBin = props => {
  let code = binding();
  console.log(code);

  Axios({
    method: "GET", // 请求类型
    url: "/", // 请求地址
    params: {
      // 请求数据
      code: code
    },
    responseType: "json" // 响应数据的类型
  })
    .then(response => {
      console.log(response);
      console.log(props);
      props.history.push("/select");
    })
    .catch(error => {
      alert(error);
      props.history.push("/404");
    });

  return null;
};

export default WechatBin;
