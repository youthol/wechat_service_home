import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import PageNotFou from "./pages/404/index";
import WechatBin from "./pages/wechatBin";
import InfoBin from "./pages/infoBin";
import Home from "./pages/home";
import User from "./pages/user";

class Router extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={WechatBin} />
            <Route exact path="/404" component={PageNotFou} />
            <Route exact path="/bind" component={InfoBin} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/user" component={User} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Router;
