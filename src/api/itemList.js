import { serviceUrl } from "./service";
import ncre from '../common/img/ncre.png';
import freshman from '../common/img/freshman.png';

/**
 * 1. 为了最佳的显示效果，每一项名称的字数尽量不要超过6个字；
 * 2. 部分图标来源于阿里矢量图库，通过font的格式导入，所以每一项有iconClass属性；
 * 3. 想到以后添加新功能时，图标可能是图片格式，所以这里预留imgSrc属性，用来存放图片地址；
 * 4. 注意：imgSrc的值应该是图片模块，此外，如果iconClass和imgSrc同时有值，优先展示iconClass；
 */
export const itemList = [
  {
    name: "新生信息查询",
    url: serviceUrl.freshman,
    iconClass: "",
    imgSrc: freshman
  },
  {
    name: "绩点查询",
    url: serviceUrl.jidian,
    iconClass: "iconfont icon-chengji",
    imgSrc: ""
  },
  {
    name: "一卡通查询",
    url: serviceUrl.ecard,
    iconClass: "iconfont icon-qia1",
    imgSrc: ""
  },
  {
    name: "用电查询",
    url: serviceUrl.elec,
    iconClass: "iconfont icon-dianchi",
    imgSrc: ""
  },
  {
    name: "宿舍卫生成绩",
    url: serviceUrl.hygiene,
    iconClass: "iconfont icon-dasao",
    imgSrc: ""
  },
  {
    name: "考试时间",
    url: serviceUrl.exam,
    iconClass: "iconfont icon-exam",
    imgSrc: ""
  },
  {
    name: "计算机等级",
    url: serviceUrl.ncre,
    iconClass: "",
    imgSrc: ncre
  },
  {
    name: "四六级成绩",
    url: serviceUrl.cet,
    iconClass: "iconfont icon-chengjifenxi",
    imgSrc: ""
  },
  {
    name: "教师资格证",
    url: serviceUrl.cert,
    iconClass: "iconfont icon-jiaoshi",
    imgSrc: ""
  },
  {
    name: "普通话查询",
    url: serviceUrl.pth,
    iconClass: "iconfont icon-wsdzb_zbgzt_zzsh_txth",
    imgSrc: ""
  },
  {
    name: "校历查询",
    url: serviceUrl.calendor,
    iconClass: "iconfont icon-rili1",
    imgSrc: ""
  },
  {
    name: "班车时间",
    url: serviceUrl.bus,
    iconClass: "iconfont icon-gongjiaoche-",
    imgSrc: ""
  },
  {
    name: "全景地图",
    url: serviceUrl.qj,
    iconClass: "iconfont icon-quanjing",
    imgSrc: ""
  }
];
