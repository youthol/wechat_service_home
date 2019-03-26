import React from "react";

const HomeBox = (props) => {
  return (
    <a
      href={props.url}
      className={"weui-grid js_grid " + props.className}
    >
      <div className="weui-grid__icon">
        <img src={props.imgSrc} alt={props.name} />
      </div>
      <p className="weui-grid__label">{props.name}</p>
    </a>
  );
};

export default HomeBox;
