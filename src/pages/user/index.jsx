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
      dialogOpen: false,
      name: "",
      sdut_id: "",
      college: "",
      class: "",
      dormitory: "",
      room: ""
    };
  }

  componentDidMount() {
    const data = this.props.reduxUserInfo;
    this.setState({
      name: data.name,
      sdut_id: data.sdut_id,
      college: data.college.name,
      class: "未绑定",
      dormitory: data.dormitory.description,
      room: data.room
    });

    if (data.class) {
      this.setState({
        class: data.class
      });
    }
  }
  changeInfo = () => {
    this.props.history.push("/change");
    console.log(this.props.history);
  };

  cancelBind = async () => {
    // 清除本地信息
    loStorage.remove("info");
    await this.props.updateUserInfo("");
    this.props.history.push("/");
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
            <ListItemText primary="姓名" secondary={this.state.name} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PermContactCalendar color="primary" />
            </ListItemIcon>
            <ListItemText primary="学号" secondary={this.state.sdut_id} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AccountBalance color="primary" />
            </ListItemIcon>
            <ListItemText primary="学院" secondary={this.state.college} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <ListItemText primary="班级" secondary={this.state.class} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <Business color="primary" />
            </ListItemIcon>
            <ListItemText primary="宿舍楼号" secondary={this.state.dormitory} />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <AirlineSeatIndividualSuite color="primary" />
            </ListItemIcon>
            <ListItemText primary="宿舍房间号" secondary={this.state.room} />
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
  reduxUserInfo: state.userInfo.info
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUserInfo: () => dispatch(updateUserInfo())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
