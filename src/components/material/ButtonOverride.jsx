import React, { Component } from 'react';
import { Button, CircularProgress } from '@material-ui/core';

class ButtonOverride extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <Button
          fullWidth={this.props.fullWidth}
          className="page_button"
          variant={this.props.variant}
          color={this.props.color}
          onClick={this.props.onClick}
          disabled={this.props.disabled}
        >
        {this.props.loading? <CircularProgress size={20} style={{marginRight: 10}}/>: null}
        {this.props.children}
        </Button>
      </div>
    );
  }
}

export default ButtonOverride;