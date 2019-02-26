import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';
import logo from '../../img/albert_icon.png';


class Header extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
  };

  render() {
    const HeaderAnt = this.props.component;

    return (
      <HeaderAnt className="header">
        <div className="logo">
          <img alt="Albert Sabate" src={logo} />
          <span>Albert Sabate</span>
        </div>
        <Menu mode="horizontal">
          <Menu.Item key="about"><AnchorLink href="#about" offset="64">ABOUT</AnchorLink></Menu.Item>
          <Menu.Item key="what"><AnchorLink href="#what" offset="64">WHAT I DO</AnchorLink></Menu.Item>
          <Menu.Item key="works"><AnchorLink href="#works" offset="64">WORKS</AnchorLink></Menu.Item>
          <Menu.Item key="contact"><AnchorLink href="#contact" offset="64">CONTACT</AnchorLink></Menu.Item>
        </Menu>
      </HeaderAnt>
    );
  }
}

export default Header;
