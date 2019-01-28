import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="weui-footer p-footer">
      <p className="weui-footer__text">Copyright &copy; 2016-{year} 青春在线</p>
    </div>
  );
};

export default Footer;
