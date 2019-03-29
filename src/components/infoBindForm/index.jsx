import React, { Component } from "react";
import Cells from "../weui/Cells";
import Input from "../weui/Input";
import Select from "../weui/Select";
import Axios from "axios";
import { Api } from "../../common/api";
import Button from "../weui/Button";
import { loStorage } from "../../model/storage";

const collegeState = [
  <option value="0">学院信息获取中..</option>,
  <option value="0">请选择所在学院</option>,
  <option value="0">学院信息获取失败！</option>
];
const dormitoryState = [
  <option value="0">宿舍信息获取中..</option>,
  <option value="0">请选择所在宿舍楼</option>,
  <option value="0">宿舍信息获取失败！</option>
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
          'Authorization': "Bearer " + loStorage.get("meta").access_token
        },
        data: subData
      })
        .then(res => {
          console.log(res);
          loStorage.set("info", subData);
          this.props.history.push('/home');
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  render() {
    return (
      <div>
        <form>
          <Cells>
            <Input
              title="学号*"
              desc="请输入学号"
              name="sdut_id"
              onChange={e => {
                this.getFormData(e);
              }}
            />
            <Select
              title="学院*"
              defaultValue="0"
              name="college"
              onChange={e => {
                this.getFormData(e);
              }}
            >
              {this.state.isCollege}
              {!this.state.collegeList
                ? null
                : this.state.collegeList.map(item => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
            </Select>
            <Input
              title="班级"
              desc="请输入所在班级"
              name="class"
              onChange={e => {
                this.getFormData(e);
              }}
            />
            {/* <Select
              title="校区*"
              defaultValue="2"
              name="school"
              onChange={e => {
                this.getFormData(e);
              }}
            >
              <option value="2">请选择所在校区</option>
              <option value="0">东校区</option>
              <option value="1">西校区</option>
            </Select> */}
            <Select
              title="宿舍楼号*"
              defaultValue="0"
              name="dormitory"
              onChange={e => {
                this.getFormData(e);
              }}
            >
              {this.state.isDormitory}
              {!this.state.dormitoryList
                ? null
                : this.state.dormitoryList.map(item => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.description}
                      </option>
                    );
                  })}
            </Select>
            <Input
              title="房间号*"
              desc="请输入房间号"
              name="room"
              onChange={e => {
                this.getFormData(e);
              }}
            />
            <Input
              title="教务处密码*"
              desc="请输入密码"
              type="password"
              name="password_jwc"
              onChange={e => {
                this.getFormData(e);
              }}
            />
            <Input
              title="网上服务大厅密码"
              desc="请输入密码"
              type="password"
              name="password_dt"
              labelClassName="service-ol"
              onChange={e => {
                this.getFormData(e);
              }}
            />
          </Cells>
          <Button content="绑定" onClick={this.handleSub} />
        </form>
      </div>
    );
  }
}

export default InfoBindForm;
