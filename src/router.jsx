import React, { Component } from 'react';
import { HashRouter, Switch, Route  } from 'react-router-dom';
import LoginSel from './pages/loginSel';

class Router extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path='/' component={LoginSel} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default Router;