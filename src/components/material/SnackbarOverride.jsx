import React, { Component } from "react";
import { Snackbar, SnackbarContent, withStyles } from "@material-ui/core";
import WarningIconOverride from "./WarningIconOverride";
import { red, green } from "@material-ui/core/colors";

const yhlStyle = () => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: red[500]
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

class SnackbarOverride extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      snackbarVertical: "top",
      snackbarHorizontal: "center"
    };
  }

  componentWillReceiveProps = nextProps => {
    const { open } = nextProps;
    this.setState({
      open
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      open: false
    });
    // 受父组件传递的props控制，需要同时关闭父组件的open
    this.props.close();
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: this.state.snackbarVertical,
            horizontal: this.state.snackbarHorizontal
          }}
          open={this.state.open}
          onClose={this.handleCloseSnackbar}
          autoHideDuration={1500}
        >
          <SnackbarContent
            classes={
              this.props.state === "success"
                ? { root: classes.success }
                : { root: classes.error }
            }
            message={
              <span className={classes.message}>
                <WarningIconOverride />
                {this.props.content}
              </span>
            }
          />
        </Snackbar>
      </div>
    );
  }
}

export default withStyles(yhlStyle)(SnackbarOverride);
