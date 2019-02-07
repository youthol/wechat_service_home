/*
 * 信息绑定：
 * 1、信息发送至服务器
 * 2、信息保存至本地
 * 3、跳转至查询主页面
 */
import React from "react";
import Header from "../../components/layout/Header";
import InfoBindForm from "../../components/infoBindForm";
import Footer from "../../components/layout/Footer";

const InfoBin = () => {
  return (
    <div>
      <Header title="信息绑定" />
      <InfoBindForm />
      <Footer />
    </div>
  );
};

export default InfoBin;
