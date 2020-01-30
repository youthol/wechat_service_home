import React, { Component } from "react";
import InfoBindForm from "../../components/form/InfoBind";
import { getInfoByToken } from "../../api/bind";
import Layout from "../../layout/BaseLayout";
import { overrideForInfoChange } from "../../lib/overrideData";

class InfoChan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount = () => {
    this.setState({
      data: overrideForInfoChange()
    });
  };

  setLocalInfo = () => {
    const data = getInfoByToken();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Layout title="修改信息">
          <InfoBindForm
            option="修改"
            history={this.props.history}
            data={this.state.data}
          />
        </Layout>
      </div>
    );
  }
}

export default InfoChan;
