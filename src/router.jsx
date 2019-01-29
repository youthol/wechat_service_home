import React, { Component } from 'react';
import { HashRouter, Switch, Route  } from 'react-router-dom';
import LoginSel from './pages/loginSel';
import PageNotFou from './pages/404/index';


class Router extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={LoginSel} />
            <Route exact path='/404' component={PageNotFou} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Router;