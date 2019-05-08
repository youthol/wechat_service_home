import React, { Component } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { getDormitory, bindInfo, getCollege } from "../../api/bind";
import SnackbarOverride from "../material/SnackbarOverride";
import ButtonOverride from "../material/ButtonOverride";

const collegeState = ["学院信息获取中..", "学院信息获取失败！"];
const dormitoryState = ["宿舍信息获取中..", "宿舍信息获取失败！"];
const mastInput = ["sdut_id", "college", "dormitory", "room", "password_jwc"];

class InfoBindForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sdut_id: "",
      college: "",
      class: "",
      dormitory: "",
      room: "",
      password_jwc: "",
      // password_dt: "",
      showPassword_jwc: false,
      // showPassword_dt: false,
      collegeList: "",
      isCollege: collegeState[0],
      dormitoryList: "",
      isDormitory: dormitoryState[0],
      snackbarOpen: false,
      snackbarContent: "",
      snackbarState: "success",
      loading: false
    };
  }

  // 先调用子组件的componentDidMount，再调用父组件的componentDidMount
  componentDidMount() {
    this.getCollege();
    this.getDormitory();
    const data = this.props.data;
    this.setState({
      sdut_id: data.sdut_id,
      college: data.college,
      class: data.class,
      dormitory: data.dormitory,
      room: data.room,
      password_jwc: data.password_jwc
      // password_dt: data.password_dt
    });
  }

  // 清除异步请求
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  // 异步获取学院信息
  getCollege = async () => {
    const data = await getCollege().catch(() => {
      // 获取失败
      this.setState({
        isCollege: collegeState[1]
      });
      return false;
    });
    // 成功
    if (data) {
      this.setState({
        collegeList: data.data
      });
    }
  };

  // 异步获取宿舍楼信息
  getDormitory = async () => {
    const data = await getDormitory().catch(() => {
      // 获取失败
      this.setState({
        isDormitory: dormitoryState[1]
      });
      return false;
    });
    // 成功
    if (data) {
      this.setState({
        dormitoryList: data.data
      });
    }
  };

  // 选择框
  getSelData = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // 输入框
  getInputData = e => {
    const inputName = e.target.name;
    this.setState({
      [inputName]: e.target.value
    });
  };

  // 验证表单中的必选项
  checkForm = () => {
    for (const key in mastInput) {
      if (mastInput.hasOwnProperty(key)) {
        const element = mastInput[key];
        if (this.state[element] === "") {
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
      this.setState({
        loading: true
      });
      this.bindInfo();
    }
  };

  // bindInfo = async () => {
  //   const subData = {
  //     sdut_id: this.state.sdut_id,
  //     college: parseInt(this.state.college),
  //     class: this.state.class,
  //     dormitory: parseInt(this.state.dormitory),
  //     room: parseInt(this.state.room),
  //     password_jwc: this.state.password_jwc
  //     // password_dt: this.state.password_dt
  //   };
  //   const header = {
  //     // Authorization: "Bearer " + loStorage.get("meta").access_token
  //   };
  //   await bindInfo(subData, header).catch(err => {
  //     console.log(err);
  //     switch (err.data.message) {
  //       case "Token has expired":
  //         break;
  //       case "学号或网上服务大厅密码错误":
  //         this.handleShowSnackbar();
  //         return;
  //       case "服务端错误":
  //         this.handleShowSnackbar();
  //         return;
  //       default:
  //         return;
  //     }
  //   });
  //   this.handleShowSnackbar();
  // };

  // handleClickShowPasswordJwc = () => {
  //   this.setState({
  //     showPassword_jwc: !this.state.showPassword_jwc
  //   });
  // };
  // handleClickShowPasswordDt = () => {
  //   this.setState({
  //     showPassword_dt: !this.state.showPassword_dt
  //   });
  // };
  // handleShowSnackbar = (state = "success", content) => {
  //   console.log(1);

  //   if (state === "inputError") {
  //     this.setState({
  //       snackbarState: "error",
  //       snackbarOpen: true,
  //       snackbarContent: "未填写" + this.state[content].title
  //     });
  //   } else {
  //     this.setState({
  //       snackbarState: "success",
  //       snackbarOpen: true,
  //       snackbarContent: "修改成功！",
  //       loading: false
  //     });
  //     setTimeout(() => {
  //       this.props.history.push("/user");
  //     }, 1000);
  //   }
  // };
  // handleCloseSnackbar = () => {
  //   this.setState({
  //     snackbarOpen: false
  //   });
  // };
  render() {
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
          value={this.state.sdut_id}
        />

        <TextField
          select
          margin="dense"
          fullWidth={true}
          label="学院 *"
          value={this.state.college}
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
          value={this.state.class}
        />
        <TextField
          select
          margin="dense"
          fullWidth={true}
          label="宿舍楼号 *"
          value={this.state.dormitory}
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
          value={this.state.room}
        />

        <FormControl fullWidth={true} margin="dense">
          <InputLabel>教务处密码 *</InputLabel>
          <Input
            type={this.state.showPassword_jwc ? "text" : "password"}
            onChange={this.getInputData}
            name="password_jwc"
            value={this.state.password_jwc}
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
        {/* <FormControl fullWidth={true} margin="dense">
          <InputLabel>网上服务大厅密码</InputLabel>
          <Input
            type={this.state.showPassword_dt ? "text" : "password"}
            onChange={this.getInputData}
            name="password_dt"
            value={this.state.password_dt}
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
        </FormControl> */}
        <ButtonOverride
          fullWidth={true}
          className="page_button"
          variant="contained"
          color="primary"
          disabled={this.state.loading ? true : false}
          loading={this.state.loading}
          onClick={this.handleSub}
        >
          {this.state.loading ? "提交中" : "提交"}
        </ButtonOverride>

        {/* <SnackbarOverride
          content={this.state.snackbarContent}
          state={this.state.snackbarState}
          open={this.state.snackbarOpen}
          close={this.handleCloseSnackbar}
        /> */}
      </div>
    );
  }
}

export default InfoBindForm;
