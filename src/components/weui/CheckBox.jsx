import React from 'react';

const CheckList = (props) => {
  return (
    <div>
      <div className="weui-cells weui-cells_checkbox">
        {props.children}
      </div>
    </div>
  );
};

export default CheckList;