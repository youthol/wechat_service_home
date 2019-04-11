import React, { Component } from "react";
import Header from "../../components/layout/Header";
import InfoBindForm from "../../components/infoBindForm";
import Footer from "../../components/layout/Footer";
import { connect } from "react-redux";
import { updateUserInfo } from "../../store/action";
import { loStorage } from "../../model/storage";

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
    if (loStorage.get("info")) {
      await this.props.updateUserInfo(loStorage.get("info"));
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
  render() {
    return (
      <div>
        <Header title="修改信息" />
        <InfoBindForm
          option="修改"
          history={this.props.history}
          fatherState={this.state}
        />
        <Footer />
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
