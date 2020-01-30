import React, { Component } from "react";
import Router from "./router";
import "./asset/style/App.scss";
import "typeface-roboto";
import "./asset/img/iconfont/iconfont.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { pink, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 12
  },
  palette: {
    primary: blue,
    secondary: pink
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router />
      </MuiThemeProvider>
    );
  }
}

export default App;
