import React, { Component } from "react";
import Router from "./router"
import "./common/style/App.scss";
import 'typeface-roboto';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import {  pink, blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
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
        <MuiThemeProvider theme={theme}>
          <Router />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
