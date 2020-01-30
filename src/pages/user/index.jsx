import React, { Component } from "react";
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
import { overrideForUser } from '../../lib/overrideData';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      data: {}
    };
  }

  componentDidMount = () => {
    this.setState({
      data: overrideForUser()
    })
  };

  changeInfo = () => {
    this.props.history.push("/change");
    console.log(this.props.history);
  };

  cancelBind = () => {
    // 清除本地信息
    localStorage.clear();
    this.props.history.replace("/home");
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
    const itemList = [
      {
        label: "姓名",
        iconBox: <Face color="primary" />,
        data: this.state.data.name
      },
      {
        label: "学号",
        iconBox: <PermContactCalendar color="primary" />,
        data: this.state.data.sdut_id
      },
      {
        label: "学院",
        iconBox: <AccountBalance color="primary" />,
        data: this.state.data.college
      },
      {
        label: "班级",
        iconBox: <Home color="primary" />,
        data: this.state.data.class
      },
      {
        label: "宿舍楼号",
        iconBox: <Business color="primary" />,
        data: this.state.data.dormitory
      },
      {
        label: "宿舍房间号",
        iconBox: <AirlineSeatIndividualSuite color="primary" />,
        data: this.state.data.room
      }
    ];
    return (
      <div>
        <List
          component="nav"
          subheader={<ListSubheader component="div">个人信息</ListSubheader>}
        >
        {
          itemList.map((item, index)=>{
            return (
              <ListItem key={index}>
                <ListItemIcon>
                  {item.iconBox}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  secondary={item.data}
                />
              </ListItem>
            );
          })
        }
          {/* <ListItem>
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
          </ListItem> */}
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

export default User;
