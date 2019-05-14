import React from 'react';
import Footer from '../../components/Layout/Footer';
import FooterLink from '../../components/Layout/FooterLink';

const About = () => {
  return (
    <div>
      <div className="about-top">
        <img src="../../common/img/logo.png" alt="logo"/>
      </div>
      <div className="about-content"></div>
      <div className="about-bottom">
        <Footer>
          <FooterLink />
        </Footer>
      </div>
    </div>
  );
};

export default About;