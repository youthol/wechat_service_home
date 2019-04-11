import React, { Component } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Snackbar,
  SnackbarContent,
  withStyles
} from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";
import WarningIconOverride from "../material/WarningIconOverride";
import { getDormitory, bindInfo, getCollege } from "../../api/bind";
import { loStorage } from "../../model/storage";

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

const collegeState = ["学院信息获取中..", "学院信息获取失败！"];
const dormitoryState = ["宿舍信息获取中..", "宿舍信息获取失败！"];
const mastInput = ["sdut_id", "college", "dormitory", "room", "password_jwc"];

class InfoBindForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sdut_id: {
        title: "学号",
        content: ""
      },
      college: {
        title: "学院",
        content: ""
      },
      class: {
        title: "班级",
        content: ""
      },
      dormitory: {
        title: "宿舍楼号",
        content: ""
      },
      room: {
        title: "房间号",
        content: ""
      },
      password_jwc: {
        title: "教务处密码",
        content: ""
      },
      password_dt: {
        title: "网上服务大厅密码",
        content: ""
      },
      showPassword_jwc: false,
      showPassword_dt: false,
      collegeList: "",
      isCollege: collegeState[0],
      dormitoryList: "",
      isDormitory: dormitoryState[0],
      snackbarState: false,
      snackbarOpen: false,
      snackbarVertical: "top",
      snackbarHorizontal: "center",
      snackbarContent: ""
    };
  }

  componentDidMount() {
    this.getCollege();
    this.getDormitory();
  }

  componentWillReceiveProps = nextProps => {
    const { fatherState } = nextProps;
    if (fatherState) {
      this.setState({
        sdut_id: Object.assign({}, this.state.sdut_id, {
          content: fatherState.sdut_id
        }),
        college: Object.assign({}, this.state.college, {
          content: fatherState.college
        }),
        class: Object.assign({}, this.state.class, {
          content: fatherState.class
        }),
        dormitory: Object.assign({}, this.state.dormitory, {
          content: fatherState.dormitory
        }),
        room: Object.assign({}, this.state.room, {
          content: fatherState.room
        }),
        password_jwc: Object.assign({}, this.state.password_jwc, {
          content: fatherState.password_jwc
        }),
        password_dt: Object.assign({}, this.state.password_dt, {
          content: fatherState.password_dt
        })
      });
    }
  };

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }
  // 异步获取学院信息
  getCollege = async () => {
    const data = await getCollege().catch(() => {
      this.setState({
        isCollege: collegeState[1]
      });
      return false;
    });
    if (data) {
      this.setState({
        collegeList: data.data
      });
    }
  };

  // 异步获取宿舍楼信息
  getDormitory = async () => {
    const data = await getDormitory().catch(() => {
      this.setState({
        isDormitory: dormitoryState[1]
      });
      return false;
    });
    if (data) {
      this.setState({
        dormitoryList: data.data
      });
    }
  };

  // 选择框
  getSelData = event => {
    console.log(event.target.value);

    this.setState({
      [event.target.name]: Object.assign({}, this.state[event.target.name], {
        content: event.target.value
      })
    });
    console.log(event.target.value);
  };

  // 输入框
  getInputData = e => {
    const inputName = e.target.name;
    this.setState({
      [inputName]: {
        content: e.target.value
      }
    });
  };

  // 验证表单中的必选项
  checkForm = () => {
    for (const key in mastInput) {
      if (mastInput.hasOwnProperty(key)) {
        const element = mastInput[key];
        if (this.state[element].content === "") {
          console.log(element);

          this.handleShowSnackbar("inputError", element);
          return;
        }
      }
    }
    return true;
  };

  handleSub = () => {
    if (this.checkForm()) {
      this.bindInfo();
    }
  };

  bindInfo = async () => {
    console.log(this.state);

    const subData = {
      sdut_id: this.state.sdut_id.content,
      college: parseInt(this.state.college.content),
      class: this.state.class.content,
      dormitory: parseInt(this.state.dormitory.content),
      room: parseInt(this.state.room.content),
      password_jwc: this.state.password_jwc.content,
      password_dt: this.state.password_dt.content
    };

    console.log(subData);

    const header = {
      Authorization: "Bearer " + loStorage.get("meta").access_token
    };
    await bindInfo(subData, header).catch(err => {
      console.log(err);
      switch (err.data.message) {
        case "Token has expired":
          break;
        case "学号或网上服务大厅密码错误":
          this.handleShowSnackbar();
          return;
        case "服务端错误":
          this.handleShowSnackbar();
          return;
        default:
          return;
      }
    });
    this.handleShowSnackbar();
  };

  handleClickShowPasswordJwc = () => {
    this.setState({
      showPassword_jwc: !this.state.showPassword_jwc
    });
  };
  handleClickShowPasswordDt = () => {
    this.setState({
      showPassword_dt: !this.state.showPassword_dt
    });
  };
  handleShowSnackbar = (state = "success", content) => {
    if (state === "inputError") {
      this.setState({
        snackbarOpen: true,
        snackbarContent: "未填写" + this.state[content].title
      });
    } else {
      this.setState({
        snackbarState: true,
        snackbarOpen: true,
        snackbarContent: "修改成功！"
      });

      setTimeout(() => {
        this.props.history.push("/user");
      }, 1000);
    }
  };
  handleCloseSnackbar = () => {
    this.setState({
      snackbarOpen: false
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="page_bd">
        <TextField
          error={false}
          label="学号 *"
          name="sdut_id"
          placeholder="请输入学号"
          fullWidth={true}
          margin="dense"
          onChange={this.getInputData}
          className="form-font-size"
          value={this.state.sdut_id.content}
        />

        <TextField
          select
          margin="dense"
          fullWidth={true}
          label="学院 *"
          value={this.state.college.content}
          name="college"
          onChange={this.getSelData}
          SelectProps={{
            native: true
          }}
        >
          <option value="" disabled />
          {!this.state.collegeList ? (
            <option value="1" disabled>
              {this.state.isCollege}
            </option>
          ) : (
            this.state.collegeList.map(item => {
              return (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              );
            })
          )}
        </TextField>
        <TextField
          label="班级"
          name="class"
          placeholder="请输入所在班级"
          fullWidth={true}
          margin="dense"
          onChange={this.getInputData}
          value={this.state.class.content}
        />
        <TextField
          select
          margin="dense"
          fullWidth={true}
          label="宿舍楼号 *"
          value={this.state.dormitory.content}
          name="dormitory"
          onChange={this.getSelData}
          SelectProps={{
            native: true
          }}
        >
          <option value="" disabled />
          {!this.state.dormitoryList
            ? this.state.isDormitory
            : this.state.dormitoryList.map(item => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.description}
                  </option>
                );
              })}
        </TextField>
        <TextField
          label="房间号 *"
          name="room"
          placeholder="请输入房间号"
          fullWidth={true}
          margin="dense"
          onChange={this.getInputData}
          value={this.state.room.content}
        />

        <FormControl fullWidth={true} margin="dense">
          <InputLabel>教务处密码 *</InputLabel>
          <Input
            type={this.state.showPassword_jwc ? "text" : "password"}
            onChange={this.getInputData}
            name="password_jwc"
            value={this.state.password_jwc.content}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPasswordJwc}
                >
                  {this.state.showPassword_jwc ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl fullWidth={true} margin="dense">
          <InputLabel>网上服务大厅密码</InputLabel>
          <Input
            type={this.state.showPassword_dt ? "text" : "password"}
            onChange={this.getInputData}
            name="password_dt"
            value={this.state.password_dt.content}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPasswordDt}
                >
                  {this.state.showPassword_dt ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          fullWidth={true}
          className="page_button"
          variant="contained"
          color="primary"
          onClick={this.handleSub}
        >
          提交
        </Button>

        <Snackbar
          anchorOrigin={{
            vertical: this.state.snackbarVertical,
            horizontal: this.state.snackbarHorizontal
          }}
          open={this.state.snackbarOpen}
          onClose={this.handleCloseSnackbar}
          autoHideDuration={1500}
        >
          <SnackbarContent
            classes={
              this.state.snackbarState
                ? { root: classes.success }
                : { root: classes.error }
            }
            message={
              <span className={classes.message}>
                <WarningIconOverride />
                {this.state.snackbarContent}
              </span>
            }
          />
        </Snackbar>
      </div>
    );
  }
}

export default withStyles(yhlStyle)(InfoBindForm);
