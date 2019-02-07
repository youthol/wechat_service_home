import React from "react";

const Select = props => {
  return (
    <div className="weui-cell">
      <div className="weui-cell__hd">
        <label className="weui-label">{props.title}</label>
      </div>
      <div className="weui-cell__bd">
        <select className="weui-input" id="campus" type="text" defaultValue={props.defaultValue} readOnly={true}>
          {props.children}
        </select>
      </div>
    </div>
  );
};

export default Select;
