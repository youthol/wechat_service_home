import React from "react";

const FooterLink = props => {
  return (
    <a href={props.url} className="weui-footer__link">
      {props.name}
    </a>
  );
};

export default FooterLink;
