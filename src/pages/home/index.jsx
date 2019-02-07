import React from "react";
import HomeBody from "../../components/homeUnit/HomeBody";
import HomeBox from "../../components/homeUnit/HomeBox";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import FooterLink from "../../components/layout/FooterLink";

const Home = () => {
  return (
    <div>
      <Header title="学生服务" />
      <HomeBody>
        <HomeBox
          name="一卡通查询"
          url="https://lab.youthol.cn/app/wechat-service/ecard/"
          imgSrc=""
        />
        <HomeBox
          name="一卡通查询"
          url="https://lab.youthol.cn/app/wechat-service/ecard/"
          imgSrc=""
        />
        <HomeBox
          name="一卡通查询"
          url="https://lab.youthol.cn/app/wechat-service/ecard/"
          imgSrc=""
        />
        <HomeBox
          name="一卡通查询"
          url="https://lab.youthol.cn/app/wechat-service/ecard/"
          imgSrc=""
        />
      </HomeBody>
      <Footer>
        <FooterLink name="首页" url="" />
      </Footer>
    </div>
  );
};

export default Home;
