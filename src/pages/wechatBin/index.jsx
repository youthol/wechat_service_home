/*
 * 微信携带code回调至该页面
 * 从这里获取code（不需要渲染）
 */
import { binding } from "../../components/getCode";
import Axios from "axios";
import { Api } from "../../common/api";
import { loStorage } from "../../model/storage";

const WechatBin = props => {
  let code = binding();
  console.log(code);

  Axios({
    method: "GET", // 请求类型
    url: Api.infoByCode, // 请求地址
    params: {
      // 请求数据
      code: code
    },
    responseType: "json" // 响应数据的类型(默认)
  })
    .then(response => {
      console.log(response);
      loStorage.clear();
      if (!response.data) {
        props.history.push("/home");
      } else {
        if (response.data.code === 0) {
          loStorage.set("info", response.data.data);
        }
        loStorage.set("meta", response.data.meta);
        props.history.push("/home");
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
