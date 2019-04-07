import React, { Component } from "react";
import Router from "./router"
import { Provider } from 'react-redux';
import "./common/style/App.scss";
import 'typeface-roboto';
import './common/img/iconfont/iconfont.css';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import {  pink, blue } from "@material-ui/core/colors";
import { store } from "./store";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 12
  },
  palette: {
    primary: blue,
    secondary: pink
  }
})

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <Router />
          </MuiThemeProvider>
        </Provider>
      </div>
    );
  }
}

export default App;
