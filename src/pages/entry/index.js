import { binding } from "../../model/getcode";
import { getInfoByCode } from "../../api/bind";

const Entry = props => {
  let code = binding();
  console.log(code);

  const getInfo = async () => {
    const resData = await getInfoByCode({ code }).catch(err => {
      console.log(err);
      return false;
    });
    props.history.replace({ pathname: "/home", resData });
  };

  getInfo();
  return null;
};

export default Entry;
