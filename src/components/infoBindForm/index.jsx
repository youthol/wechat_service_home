import React, { Component } from "react";
import Cells from "../weui/Cells";
import Input from "../weui/Input";
import Select from "../weui/Select";
import Axios from "axios";
import Item from "antd/lib/list/Item";

const collegeState = [
  <option value="0">宿舍信息获取中..</option>,
  <option value="0">请选择所在学院</option>,
  <option value="0">学院信息获取失败！</option>
];

class InfoBindForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colleges: [],
      isCollege: collegeState[0]
    };
  }

  componentDidMount() {
    this.getCollege();
  }

  getCollege = () => {
    Axios({
      method: "GET",
      url: "https://api.youthol.cn/api/college"
    })
      .then(res => {
        console.log(res);
        if (res.data) {
          this.setState({
            colleges: res.data.data,
            isCollege: collegeState[1]
          });
        }
      })
      .catch(err => {
        console.log(err.response);
        this.setState({
          colleges: "",
          isCollege: collegeState[2]
        });
      });
  };
  render() {
    return (
      <div>
        <form>
          <Cells>
            <Input title="学号" desc="请输入学号" />
            <Select title="学院" defaultValue="0">
              {this.state.isCollege}
              {!this.state.colleges
                ? null
                : this.state.colleges.map(item => {
                    return (
                      <option value={Item.id} key={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
            </Select>
            <Select title="校区" defaultValue="2">
              <option value="2">请选择所在校区</option>
              <option value="0">东校区</option>
              <option value="1">西校区</option>
            </Select>
          </Cells>
        </form>
      </div>
    );
  }
}

export default InfoBindForm;
