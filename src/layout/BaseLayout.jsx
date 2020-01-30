import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FooterLink from "./FooterLink";

const BaseLayout = props => {
  return (
    <div>
      <Header title={props.title} />
      <div>{props.children}</div>
      <Footer>
        <FooterLink links={props.links} />
      </Footer>
    </div>
  );
};

export default BaseLayout;
