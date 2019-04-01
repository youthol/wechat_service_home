import React from "react";
import WarningIcon from "@material-ui/icons/Warning";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";

const style = () => ({
  iconVeitify: {
    opacity: 0.9,
    marginRight: 5
  },
  icon: {
    fontSize: 20
  }
});
const WarningIconOverride = props => {
  const { classes } = props;
  return (
    <div>
      <WarningIcon className={classNames(classes.iconVeitify, classes.icon)} />
    </div>
  );
};

export default withStyles(style)(WarningIconOverride);
