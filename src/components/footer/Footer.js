import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
  };

  render() {
    const FooterAnt = this.props.component;

    return (
      <FooterAnt className="footer">
        Albert Sabate Martinez © 2019
      </FooterAnt>
    );
  }
}

export default Footer;
