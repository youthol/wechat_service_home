import React from "react";

const Button = props => {
  return (
    <div className="weui-btn-area">
      <span className="weui-btn weui-btn_primary" onClick={props.onClick} >{props.content}</span>
    </div>
  );
};

export default Button;
