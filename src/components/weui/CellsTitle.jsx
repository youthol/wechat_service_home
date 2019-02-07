import React from 'react';

const CellsTitle = (props) => {
  return (
    <div>
      <div className="weui-cells__title">{props.title}</div>
    </div>
  );
};

export default CellsTitle;