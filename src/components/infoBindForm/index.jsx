import React, { Component } from "react";
import Cells from "../weui/Cells";
import Input from "../weui/Input";
import Select from "../weui/Select";

class InfoBindForm extends Component {
  render() {
    return (
      <div>
        <form>
          <Cells>
            <Input title="学号" desc="请输入学号" />
            <Select title="校区" defaultValue="1" >
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
