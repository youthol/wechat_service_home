import React from "react";

const HomeBody = props => {
  return (
    <div className={"youth-bd " + props.className}>
      <div className={"weui-grids " + props.className}>{props.children}</div>
    </div>
  );
};

export default HomeBody;
