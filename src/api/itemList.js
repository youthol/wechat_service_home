import { serviceUrl } from "./service";

/**
 * 1. 为了最佳的显示效果，每一项名称的字数尽量不要超过6个字；
 * 2. 部分图标来源于阿里矢量图库，通过font的格式导入，所以每一项有iconClass属性；
 * 3. 想到以后添加新功能时，图标可能是图片格式，所以这里预留imgSrc属性，用来存放图片地址；
 * 4. 注意：2和3中，只能有一个含值，另一个应设为空字符串；
 * 5. id属性暂时无用，即可随意设置，但是展示顺序是按照索引排序
 */
export const itemList = [
  {
    id: 1,
    name: "绩点查询",
    url: serviceUrl.jidian,
    iconClass: "iconfont icon-chengji",
    imgSrc: ""
  },
  // {
  //   id: 2,
  //   name: "一卡通查询",
  //   url: serviceUrl.ecard,
  //   iconClass: "iconfont icon-qia1",
  //   imgSrc: ""
  // },
  // {
  //   id: 3,
  //   name: "用电查询",
  //   url: serviceUrl.elec,
  //   iconClass: "iconfont icon-dianchi",
  //   imgSrc: ""
  // },
  {
    id: 4,
    name: "宿舍卫生成绩",
    url: serviceUrl.hygiene,
    iconClass: "iconfont icon-dasao",
    imgSrc: ""
  },
  {
    id: 5,
    name: "考试时间",
    url: serviceUrl.exam,
    iconClass: "iconfont icon-exam",
    imgSrc: ""
  },
  {
    id: 6,
    name: "四六级成绩",
    url: serviceUrl.cet,
    iconClass: "iconfont icon-chengjifenxi",
    imgSrc: ""
  },
  {
    id: 7,
    name: "教师资格证",
    url: serviceUrl.cert,
    iconClass: "iconfont icon-jiaoshi",
    imgSrc: ""
  },
  {
    id: 8,
    name: "普通话查询",
    url: serviceUrl.pth,
    iconClass: "iconfont icon-wsdzb_zbgzt_zzsh_txth",
    imgSrc: ""
  },
  {
    id: 9,
    name: "校历查询",
    url: serviceUrl.calendor,
    iconClass: "iconfont icon-rili1",
    imgSrc: ""
  },
  {
    id: 10,
    name: "班车时间",
    url: serviceUrl.bus,
    iconClass: "iconfont icon-gongjiaoche-",
    imgSrc: ""
  },
  {
    id: 11,
    name: "全景地图",
    url: serviceUrl.qj,
    iconClass: "iconfont icon-quanjing",
    imgSrc: ""
  }
];
