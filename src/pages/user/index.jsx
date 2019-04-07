import React, { Component } from "react";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Grid
} from "@material-ui/core";
import Face from "@material-ui/icons/Face";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import Home from "@material-ui/icons/Home";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Business from "@material-ui/icons/Business";
import AirlineSeatIndividualSuite from "@material-ui/icons/AirlineSeatIndividualSuite";
import { loStorage } from "../../model/storage";

class User extends Component {

  changeInfo = () => {
    this.props.history.push('/bind');
    console.log(this.props.history);
    
  }

  cancelBind = () => {
    loStorage.clear();
    this.props.history.push('/home');
  }
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
            onClick={this.cancelBind}
          >
            退出绑定
          </Button>
        </Grid>
      </div>
    );
  }
}

export default User;
