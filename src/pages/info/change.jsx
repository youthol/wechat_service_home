import React, { Component } from "react";
import InfoBindForm from "../../components/form/InfoBind";
import { connect } from "react-redux";
import { updateUserInfo } from "../../store/action";
import { getInfoByToken } from "../../api/bind";
import Layout from '../../components/Layout';

class InfoChan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sdut_id: "",
      college: "",
      class: "",
      dormitory: "",
      room: "",
      password_jwc: "",
      password_dt: ""
    };
  }

  componentDidMount = async () => {
    if (this.props.reduxUserInfo) {
      const data = this.props.reduxUserInfo;
      this.setState({
        sdut_id: data.sdut_id,
        college: data.college.id,
        dormitory: data.dormitory.id,
        room: data.room,
        password_jwc: data.password_jwc
      });
      if (!data.class) {
        this.setState({
          class: ""
        });
      } else {
        this.setState({
          class: data.class
        });
      }
      if (!data.password_dt) {
        this.setState({
          password_dt: ""
        });
      } else {
        this.setState({
          password_dt: data.password_dt
        });
      }
    }
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
            fatherState={this.state}
          />
        </Layout>
      </div>
    );
  }
}

// redux的全局容器绑定
const mapStateToProps = (state, ownProps) => ({
  reduxUserInfo: state.userInfo.info
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUserInfo: data => dispatch(updateUserInfo(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoChan);
