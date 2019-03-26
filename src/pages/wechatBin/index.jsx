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
    url: "https://api.youthol.cn/api/service/authorization", // 请求地址
    params: {
      // 请求数据
      code: code
    },
    responseType: "json" // 响应数据的类型(默认)
  })
    .then(response => {
      console.log(response);
      console.log(props);
      if (!response.data || response.data.code === -1) {
        props.history.push("/home");
      } else {
        //
      }
    })
    .catch(error => {
      // alert(error);
      console.log(error.response);

      props.history.push("/home");
    });

  return null;
};

export default WechatBin;
