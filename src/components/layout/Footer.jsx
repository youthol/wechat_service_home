import React from "react";

const Footer = props => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className={"weui-footer youth-footer " + props.className}>
      <p className="weui-footer__links">{props.children}</p>
      <p className="weui-footer__text">Copyright &copy; 2016-{year} 青春在线</p>
    </div>
  );
};

export default Footer;
