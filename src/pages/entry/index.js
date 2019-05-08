import { binding } from "../../model/getCode";
import { getInfoByCode } from "../../api/bind";

const Entry = props => {
  let code = binding();
  console.log(code);

  const getInfo = async () => {
    const resData = await getInfoByCode({ code }).catch(err => {
      console.log(err);
      return false;
    });
    console.log(resData);
    localStorage.clear();
    localStorage.setItem("data", JSON.stringify(resData.data));
    localStorage.setItem("meta", JSON.stringify(resData.meta));
    localStorage.setItem("code", JSON.stringify(resData.code));
    props.history.replace("/home");
  };

  getInfo();
  return null;
};

export default Entry;
