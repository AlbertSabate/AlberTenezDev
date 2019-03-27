import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      {props.copyright}
    </footer>
  )
};
Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
};

export default Footer;
