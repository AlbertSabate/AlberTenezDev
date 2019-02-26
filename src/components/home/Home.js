import React, { Component } from 'react';
import { Icon } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Home.css';
import headerImg from '../../img/bg-original-min.jpg';

class Home extends Component {
  render() {
    return (
      <div id="home" className="home" style={{ backgroundImage: `url(${headerImg})` }}>
        <div className="introText">
          <h1>Albert Sabate</h1>
          <h2>Senior Software Engineer</h2>
        </div>
        <AnchorLink href="#about" offset="64"><Icon type="arrow-down" /></AnchorLink>
      </div>
    );
  }
}

export default Home;
