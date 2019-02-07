import React from "react";

const HomeBody = props => {
  return (
    <div className="youth-bd">
      <div className="weui-grids">{props.children}</div>
    </div>
  );
};

export default HomeBody;
