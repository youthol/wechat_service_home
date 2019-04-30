import React from "react";
import { Link } from "@material-ui/core";

const FooterLink = props => {
  return (
    <div>
      <Link
        href="https://lab.youthol.cn/app/wechat-service/home/"
        underline="always"
        className="page-link"
      >
        首页
      </Link>
      {props.links
        ? props.links.map((item, key) => {
            if (item.url) {
              return (
                <Link
                  href={item.url}
                  underline="always"
                  className="page-link"
                  key={key}
                >
                  {item.name}
                </Link>
              );
            } else {
              return (
                <Link
                  underline="always"
                  className="page-link"
                  key={key}
                  onClick={item.handle}
                >
                  {item.name}
                </Link>
              );
            }
          })
        : null}
    </div>
  );
};

export default FooterLink;
