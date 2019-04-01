import React from "react";
import { Link } from "react-router-dom";
import HomeBody from "../../components/homeUnit/HomeBody";
import HomeBox from "../../components/homeUnit/HomeBox";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import FooterLink from "../../components/layout/FooterLink";
import sr from "../../components/scrollreveal";
import UserImg from "../../common/img/user.png";
import { Grid } from "@material-ui/core";

class Home extends React.Component {
  componentDidMount() {
    // 出场动画
    sr.reveal(".unit", {
      origin: "bottom",
      duration: 1000,
      delay: 0,
      opacity: 0,
      distance: "20px"
    });
  }

  render() {
    return (
      <div>
        <Link to="/info">
          <img
            src={UserImg}
            alt="用户"
            onClick={this.toInfoBin}
            className="user-img unit"
          />
        </Link>
        <Header title="学生服务" />
        <Grid container spacing={24}>
          
        </Grid>
        {/* <HomeBody>
          <HomeBox
            name="绩点查询"
            url="https://lab.youthol.cn/app/wechat-service/jd/#/login"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/jidian.png"
          />
          <HomeBox
            name="一卡通查询"
            url="https://lab.youthol.cn/app/wechat-service/ecard/"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/ecard.png"
          />
          <HomeBox
            name="用电查询"
            url="https://lab.youthol.cn/app/wechat-service/elec-use/index.html#/"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/elec.png"
          />
          <HomeBox
            name="宿舍卫生成绩"
            url="https://lab.youthol.cn/app/wechat-service/hygiene/index.html#/"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/hygiene.png"
          />
          <HomeBox
            name="考试时间"
            url="https://lab.youthol.cn/app/wechat-service/exam/index.html#/"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/exam.png"
          />
          <HomeBox
            name="四六级成绩查询"
            url="http://cet.neea.edu.cn/cet/"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/cet-score.png"
          />
          <HomeBox
            name="教师资格证"
            url="https://lab.youthol.cn/app/wechat-service/cert/#/"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/teacher.png"
          />
          <HomeBox
            name="普通话查询"
            url="http://youth.sdut.edu.cn/wechat/pth/"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/pth.png"
          />
          <HomeBox
            name="校历查询"
            url="https://lab.youthol.cn/app/wechat-service/calendar"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/calendar.png"
          />
          <HomeBox
            name="班车时间"
            url="https://lab.youthol.cn/app/wechat-service/bus"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/bus.png"
          /> */}
          {/* <HomeBox
            name="四六级考号备忘"
            url="https://lab.youthol.cn/cet46"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/cet.png"
          /> */}
          {/* <HomeBox
            name="全景地图"
            url="http://720yun.com/t/49f29wa5wbs"
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/view.png"
          />
          <HomeBox
            name="更新中..."
            url={null}
            imgSrc="https://lab.youthol.cn/app/wechat-service/home/statics/images/updating.png"
          />
        </HomeBody> */}
        <Footer>
          <FooterLink name="首页" url="" />
        </Footer>
      </div>
    );
  }
}

export default Home;
