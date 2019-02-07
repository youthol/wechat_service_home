import React from "react";

const Header = props => {
  return (
    <div>
      <div className="youth-hd">
        <p className="youth-hd-title">{props.title}</p>
        <p className="youth-hd-desc">青春在线提供技术支持</p>
      </div>
    </div>
  );
};

export default Header;
