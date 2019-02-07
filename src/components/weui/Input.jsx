import React from "react";
import "../../common/style/weui.min.css";

const Input = props => {
  return (
    <div className="weui-cell">
      <div className="weui-cell__hd">
        <label className="weui-label">{props.title}</label>
      </div>
      <div className="weui-cell__bd">
        <input
          className="weui-input"
          pattern="[0-9]*"
          placeholder={props.desc}
          type={props.type}
        />
      </div>
    </div>
  );
};

export default Input;
