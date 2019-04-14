import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import PageNotFou from "./pages/404/index";
import InfoBin from "./pages/info/bind.jsx";
import InfoChan from "./pages/info/change.jsx";
import Home from "./pages/home";
import User from "./pages/user";
import { connect } from "react-redux";
import { updateUserInfo } from "./store/action";

class Router extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/404" component={PageNotFou} />
            <Route exact path="/bind" component={InfoBin} />
            <Route exact path="/change" component={InfoChan} />
            <Route exact path="/user" component={User} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  reduxUserInfo: state.userInfo.info
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUserInfo: () => dispatch(updateUserInfo())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);
