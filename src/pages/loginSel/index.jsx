import React from "react";
import Footer from "../../components/layout/Footer";
import "./loginSel.scss";
import { Card, Avatar } from "antd";
import Logo from "../../common/img/logo.png";
import Wechat from "../../common/img/wechat.png";
import sr from "../../components/scrollreveal";

const Meta = Card.Meta;

class LoginSel extends React.Component {
  componentDidMount = () => {
    sr.reveal(".card-wecaht", {
      origin: "bottom",
      duration: 1000,
      delay: 0,
      distance: "50px"
    });
    sr.reveal(".card-logo", {
      origin: "bottom",
      duration: 1000,
      delay: 200,
      distance: "50px"
    });
  };

  render() {
    return (
      <div>
        <div className="loginSel-box">
          <div className="card-wecaht">
            <Card className="loginSel-card">
              <Meta
                title="微信登录"
                avatar={<Avatar src={Wechat} />}
              />
            </Card>
          </div>
          <div className="card-logo">
            <Card className="loginSel-card">
              <Meta title="旧版入口" avatar={<Avatar src={Logo} />} />
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LoginSel;
