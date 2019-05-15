import React from "react";
import Footer from "../../components/Layout/Footer";
import FooterLink from "../../components/Layout/FooterLink";
import logo from "../../common/img/logo.png";
import lab from "../../common/img/lab.png";
import { Typography, Link } from "@material-ui/core";

const About = () => {
  return (
    <div>
      <div className="about-top">
        <img src={logo} alt="logo" className="about-img-logo" />
      </div>
      <div className="about-content">
        <p className="about-content-intro">
          <Typography variant="body1" align="justify">
            青春在线程序部由一群热爱 web
            技术的大学生组成。程序部的成员们肯于吃苦、勤于学习、乐于钻研，时刻关注并学习社会中最新的
            web 技术，保证我们的技术栈始终处于时代最前沿。
          </Typography>
        </p>
        <p className="about-content-intro">
          <Typography variant="body1" align="justify">
            依托于青春在线程序部多年的技术积累，我们熟知网站建设、Web App
            开发以及网页设计等技术，是山东理工大学内 web
            技术力量最雄厚的团队。
          </Typography>
        </p>
        <div className="about-list">
          <ul>
            <li>
              <Link href="https://youth.sdut.edu.cn/" underline="always">
                <Typography variant="body1">官方网站</Typography>
              </Link>
            </li>
            <li>
              <Link href="https://youthlab.sdut.edu.cn/" underline="always">
                <Typography variant="body1">青春实验室（建设中）</Typography>
              </Link>
            </li>
          </ul>
        </div>
        <div className="about-lab">
          <img src={lab} alt="加入我们" className="about-img-lab" />
          <Typography variant="caption" align="left">
            喜欢 web 技术的同学可以加这个交流群哦ヽ(=ˆ･ω･ˆ=)丿
          </Typography>
        </div>
      </div>
      <div className="about-bottom">
        <Footer>
          <FooterLink />
        </Footer>
      </div>
    </div>
  );
};

export default About;
