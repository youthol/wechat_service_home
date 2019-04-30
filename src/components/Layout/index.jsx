import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FooterLink from "./FooterLink";

const Layout = props => {
  return (
    <div>
      <Header title={props.title} />
      {props.children}
      <Footer>
        {/* links为数组 */}
        <FooterLink links={props.links} />
      </Footer>
    </div>
  );
};

export default Layout;
