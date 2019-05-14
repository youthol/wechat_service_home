import { getCode } from "./getCode";
import { getInfoByCode } from "../api/bind";

/**
 * 1. 每次打开学生服务都需要将code上传至服务器（检测数据库是否有该用户，没有则创建，有则返回数据）
 * 2. 若localStorage内某字段未定义，则getItem()返回的值为null
 * 3. 若服务器有数据，首次进入学生服务（或手机缓存被手动清空），数据存入local；非首次进入（local有值），不做数据更新
 * 4. 数据更新放在修改信息页面进行
 * 5. 如果在学生服务使用过程中，local被清除，getItem()的值仍为null，但此时code已经被使用，
 *    local里的字段会被设置为undefined，程序会发出致命错误
 */
export const entry = props => {
  if (localStorage.getItem("code") === null) {
    let code = getCode();
    console.log(code);

    (async () => {
      const resData = await getInfoByCode({ code }).catch(err => {
        console.log(err);
        return false;
      });
      localStorage.setItem("data", JSON.stringify(resData.data));
      localStorage.setItem("meta", JSON.stringify(resData.meta));
      localStorage.setItem("code", JSON.stringify(resData.code));
    })();
  }

  return null;
};
