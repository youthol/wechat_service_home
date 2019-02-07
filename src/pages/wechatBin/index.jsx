/*
 * 微信携带code回调至该页面
 * 从这里获取code（不需要渲染）
 */
import { binding } from '../../components/getCode' ;

const WechatBin = (props) => {
  binding(props);
  return null;
}

export default WechatBin;
