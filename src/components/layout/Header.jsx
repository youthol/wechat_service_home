import React from "react";
import { Typography } from "@material-ui/core";

const Header = props => {
  return (
    <div className={"page_hd " + props.className}>
      <Typography variant="h5" align="center" className="page_title">
        <span>{props.title}</span>
      </Typography>
      {/* <div className="youth-hd">
        <p className="youth-hd-title">{props.title}</p>
        <p className="youth-hd-desc">青春在线提供技术支持</p>
      </div> */}
    </div>
  );
};

export default Header;
