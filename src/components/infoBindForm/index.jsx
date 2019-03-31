import React, { Component } from "react";
// import Cells from "../weui/Cells";
// import Input from "../weui/Input";
// import Select from "../weui/Select";
import Axios from "axios";
import { Api } from "../../common/api";
// import Button from "../weui/Button";
import { loStorage } from "../../model/storage";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from "@material-ui/core";

const collegeState = [
  <option value="" disabled>
    学院信息获取中..
  </option>,
  <option value="" disabled>
    请选择所在学院
  </option>,
  <option value="" disabled>
    学院信息获取失败！
  </option>
];
const dormitoryState = [
  <option value="" disabled>
    宿舍信息获取中..
  </option>,
  <option value="" disabled>
    请选择所在宿舍楼
  </option>,
  <option value="" disabled>
    宿舍信息获取失败！
  </option>
];

class InfoBindForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sdut_id: {
        title: "学号",
        content: "" //str
      },
      college: {
        title: "学院",
        content: "" //int
      },
      class: "", //str
      dormitory: {
        title: "宿舍楼号",
        content: "" //int
      },
      room: {
        title: "房间号",
        content: "" //int
      },
      password_jwc: {
        title: "教务处密码",
        content: ""
      }, //str
      password_dt: "", //str
      showPassword_jwc: false,
      showPassword_dt: false,
      collegeList: [],
      isCollege: collegeState[0],
      dormitoryList: [],
      isDormitory: dormitoryState[0]
    };
  }

  componentDidMount() {
    this.getCollege();
    this.getDormitory();
  }

  getCollege = () => {
    Axios({
      method: "GET",
      url: Api.college
    })
      .then(res => {
        console.log(res);
        if (res.data) {
          this.setState({
            collegeList: res.data.data,
            isCollege: collegeState[1]
          });
        }
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          collegeList: "",
          isCollege: collegeState[2]
        });
      });
  };

  getDormitory = () => {
    Axios({
      method: "GET",
      url: Api.domitory
    })
      .then(res => {
        console.log(res);
        if (res.data) {
          this.setState({
            dormitoryList: res.data.data,
            isDormitory: dormitoryState[1]
          });
        }
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          dormitoryList: "",
          isDormitory: dormitoryState[2]
        });
      });
  };

  handleSel = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: {
        content: event.target.value
      }
    });
  };
  getFormData = e => {
    const inputName = e.target.name;
    let data = null;
    if (
      inputName === "college" ||
      inputName === "dormitory" ||
      inputName === "room"
    ) {
      data = parseInt(e.target.value);
    } else {
      data = e.target.value;
    }
    // 动态改变对象的属性名可以使用[]将变量名包裹起来
    this.setState(
      {
        [inputName]: data
      },
      () => {
        console.log(this.state[inputName]);
      }
    );
  };

  checkForm = () => {
    for (const key in this.state) {
      if (
        key === "sdut_id" ||
        key === "college" ||
        key === "dormitory" ||
        key === "room" ||
        key === "password_jwc"
      ) {
        if (this.state[key].content === "") {
          alert(`未填写${this.state[key].title}！`);
          return;
        }
      }
    }
    return true;
  };

  handleSub = () => {
    if (this.checkForm()) {
      const subData = {
        sdut_id: this.state.sdut_id,
        college: this.state.college,
        class: this.state.class,
        dormitory: this.state.dormitory,
        room: this.state.room,
        password_jwc: this.state.password_jwc,
        password_dt: this.state.password_dt
      };
      Axios({
        method: "POST",
        url: Api.bindInfo,
        headers: {
          Authorization: "Bearer " + loStorage.get("meta").access_token
        },
        data: subData
      })
        .then(res => {
          console.log(res);
          loStorage.set("info", subData);
          this.props.history.push("/home");
        })
        .catch(err => {
          console.log(err.response);
        });
    }
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
  render() {
    return (
      <div className="page_body_form">
        <TextField
          label="学号 *"
          name="sdut_id"
          placeholder="请输入学号"
          fullWidth={true}
          margin="dense"
        />
        <TextField
          select
          margin="dense"
          fullWidth={true}
          label="学院 *"
          value={this.state.college.content}
          name="college"
          onChange={this.handleSel}
          SelectProps={{
            native: true
          }}
        >
          <option value="" disabled />
          {!this.state.collegeList
            ? this.state.isCollege
            : this.state.collegeList.map(item => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
        </TextField>
        <TextField
          label="班级"
          name="class"
          placeholder="请输入所在班级"
          fullWidth={true}
          margin="dense"
        />
        <TextField
          select
          margin="dense"
          fullWidth={true}
          label="宿舍楼号 *"
          value={this.state.dormitory.content}
          name="dormitory"
          onChange={this.handleSel}
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
        />

        <FormControl fullWidth={true} margin="dense">
          <InputLabel>教务处密码 *</InputLabel>
          <Input
            type={this.state.showPassword_jwc ? "text" : "password"}
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
          <InputLabel>网上服务大厅密码 *</InputLabel>
          <Input
            type={this.state.showPassword_dt ? "text" : "password"}
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
        <Button variant="contained" color="primary" size="small">
          提交
        </Button>
      </div>
    );
  }
}

export default InfoBindForm;
