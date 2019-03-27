import React from "react";

const Select = props => {
  return (
    <div className="weui-cell">
      <div className="weui-cell__hd">
        <label className="weui-label">{props.title}</label>
      </div>
      <div className="weui-cell__bd">
        <select
          className="weui-input"
          type="text"
          name={props.name}
          defaultValue={props.defaultValue}
          readOnly={true}
          onChange={props.onChange}
        >
          {props.children}
        </select>
      </div>
    </div>
  );
};

export default Select;
