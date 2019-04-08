import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../store/action";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import Face from "@material-ui/icons/Face";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import Home from "@material-ui/icons/Home";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Business from "@material-ui/icons/Business";
import AirlineSeatIndividualSuite from "@material-ui/icons/AirlineSeatIndividualSuite";
import { loStorage } from "../../model/storage";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
  }
  changeInfo = () => {
    this.props.history.push("/change");
    console.log(this.props.history);
  };

  cancelBind = async () => {
    // 清除本地信息
    loStorage.clear();
    await this.props.updateUserInfo("");
    this.props.history.push("/home");
  };

  agreeDialog = () => {
    this.cancelBind();
    this.handleCloseDialog();
  };
  cancelDialog = () => {
    this.handleCloseDialog();
  };
  handleOpenDialog = () => {
    this.setState({
      dialogOpen: true
    });
  };
  handleCloseDialog = () => {
    this.setState({
      dialogOpen: false
    });
  };
  render() {
    return (
      <div>
        <List
          component="nav"
          subheader={<ListSubheader component="div">个人信息</ListSubheader>}
        >
          <ListItem>
            <ListItemIcon>
              <Face color="primary" />
            </ListItemIcon>
            <ListItemText primary="姓名" secondary={"刘超"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PermContactCalendar color="primary" />
            </ListItemIcon>
            <ListItemText primary="学号" secondary={"17110405068"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AccountBalance color="primary" />
            </ListItemIcon>
            <ListItemText primary="学院" secondary={"电气与电子工程学院"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <ListItemText primary="班级" secondary={"电网1702"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Business color="primary" />
            </ListItemIcon>
            <ListItemText primary="宿舍楼号" secondary={"10号公寓楼"} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AirlineSeatIndividualSuite color="primary" />
            </ListItemIcon>
            <ListItemText primary="宿舍房间号" secondary={"538"} />
          </ListItem>
        </List>
        <Grid container style={{ marginTop: 20 }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 20 }}
            onClick={this.changeInfo}
          >
            修改信息
          </Button>
          <Button
            variant="contained"
            color="default"
            style={{ marginLeft: 20 }}
            onClick={this.handleOpenDialog}
          >
            退出绑定
          </Button>
        </Grid>

        <Dialog open={this.state.dialogOpen} onClose={this.handleCloseDialog}>
          <DialogTitle>确定要取消绑定吗？</DialogTitle>
          <DialogContent />
          <DialogActions>
            <Button color="primary" onClick={this.agreeDialog}>
              确定
            </Button>
            <Button color="primary" onClick={this.cancelDialog}>
              取消
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  reduxUserInfo: state.userInfo
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUserInfo: () => dispatch(updateUserInfo())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
