import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import PageNotFou from "./pages/404/index";
import WechatBin from "./pages/wechatBin";
import InfoBin from "./pages/infoBin";
import Home from "./pages/home";

class Router extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={WechatBin} />
            <Route exact path="/404" component={PageNotFou} />
            <Route exact path="/info" component={InfoBin} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Router;
