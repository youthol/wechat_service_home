import React from "react";
import { Typography } from "@material-ui/core";

const Header = props => {
  return (
    <div className={"page-hd " + props.className}>
      <Typography variant="h5" align="center" className="page-title">
        <span>{props.title}</span>
      </Typography>
    </div>
  );
};

export default Header;
