import React from "react";
import "./404.scss";
import { Link } from "@material-ui/core";

class PageNotFou extends React.Component {

  handleBack = () => {
    this.props.history.replace('/home');
  }
  render() {
    return (
      <div className="page-not">
        <p className="page-404">404</p>
        <p className="page-not-fou">嘤嘤嘤(,,•́ . •̀,,)，没有找到页面...</p>
        <div>
          <Link onClick={this.handleBack}>返回首页</Link>
        </div>
      </div>
    );
  }
}

export default PageNotFou;
