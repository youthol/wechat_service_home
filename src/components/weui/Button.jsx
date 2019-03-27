import React from "react";

const Button = props => {
  return (
    <div className="weui-btn-area">
      <span className="weui-btn weui-btn_primary">{props.content}</span>
    </div>
  );
};

export default Button;
