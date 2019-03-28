import React from 'react';
import PropTypes from 'prop-types';
import './ContactBox.css';

const ContactBox = (props) => {
  const { href, icon: Icon, text } = props;

  return (
    <div className="contactBox">
      <a aria-label={text} href={href} target="_blank" rel="noopener noreferrer">
        <Icon size="3rem" />
        <span>{text}</span>
      </a>
    </div>
  );
};
ContactBox.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ContactBox;
