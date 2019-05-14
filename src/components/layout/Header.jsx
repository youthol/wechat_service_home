import React from "react";
import { Typography } from "@material-ui/core";

const Header = props => {
  return (
    <div className={"page-hd " + props.className}>
      <Typography variant="h5" align="center" className="page-title">
        <span>{props.title}</span>
      </Typography>
      <Typography variant="caption" align="center">
        <span className="page-support">青春在线提供技术支持</span>
      </Typography>
    </div>
  );
};

export default Header;
