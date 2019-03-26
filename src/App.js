import React, { Component } from "react";
import Router from "./router"
import "./common/style/App.scss";
import {  Provider } from 'react-redux';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    );
  }
}

export default App;
