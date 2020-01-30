import React from "react";

const Footer = props => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="page-ft">
      <div>{props.children}</div>
      <p>Copyright &copy; 2016-{year} 青春在线</p>
    </div>
  );
};

export default Footer;
