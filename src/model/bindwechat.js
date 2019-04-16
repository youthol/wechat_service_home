/**
 * 获取code
 * @returns data
 */
import { binding } from "./getcode";
import { getInfoByCode } from "../api/bind";

const bindwechat = props => {
  let code = binding();
  console.log(code);

  const getInfo = async () => {
    // 请求成功data会获取到值，请求失败用.catch()操作
    const data = await getInfoByCode({ code }).catch(err => {
      console.log(err);
      return false;
    });
    if (!data) {
      return;
    }
    return data;
  };

  return getInfo();
};

export default bindwechat;
