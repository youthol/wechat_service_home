import React from "react";

const Check = props => {

  const changeCheck = (event) => {
    const e = event.target;
    console.log(e.id + e.checked);
    
    if (e.checked) {
      e.checked = true;
    } else {
      e.checked = false;
    }
  }
  return (
    <div>
      <label className="weui-cell weui-check__label" htmlFor={props.id}>
        <div className="weui-cell__hd">
          <input
            className="weui-check"
            name={props.name}
            id={props.id}
            defaultChecked={props.checked}
            onClick={(event) => {changeCheck(event)}}
            type="checkbox"
          />
          <i className="weui-icon-checked" />
        </div>
        <div className="weui-cell__bd">
          <p>{props.content}</p>
        </div>
      </label>
    </div>
  );
};

export default Check;
