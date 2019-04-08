import React, { Component } from 'react';
import Header from '../../components/layout/Header';
import InfoBindForm from '../../components/infoBindForm';
import Footer from '../../components/layout/Footer';

class InfoChan extends Component {
  render() {
    return (
      <div>
        <Header title="修改信息" />
        <InfoBindForm option="修改" history={this.props.history} />
        <Footer />
      </div>
    );
  }
}

export default InfoChan;