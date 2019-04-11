/*
 * 微信携带code回调至该页面
 * 从这里获取code（不需要渲染）
 */
import { binding } from "../getCode";
import { loStorage } from "../../model/storage";
import { getInfoByCode } from "../../api/bind";

const WechatBin = props => {
  let code = binding();
  console.log(code);

  loStorage.clear();
  // 封装axios中的get请求,接收一个对象作为参数
  const codeInfo = {
    code: code
  };
  
  const getInfo = async () => {
    // 请求成功data会获取到值，请求失败用.catch()操作
    const data = await getInfoByCode(codeInfo).catch(err => {
      console.log(err);
      return false;
    });
    if (!data) {
      props.history.replace("/home");
      return;
    } else if (data.code === 0) {
      loStorage.set("info", data.data);
    }
    loStorage.set("meta", data.meta);
    props.history.replace("/home");
  };

  getInfo();
  return null;
};

export default WechatBin;
