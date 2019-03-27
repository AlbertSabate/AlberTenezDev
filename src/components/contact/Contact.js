import React from 'react';
import PropTypes from 'prop-types';
import ContactBox from './ContactBox';
import './Contact.css';

const Contact = (props) => {
  return (
    <div id="contact">
      <h3>Contact</h3>
      <div className="contact">
        {props.info.map(info => (
          <ContactBox
            key={info.id}
            href={info.href}
            icon={info.icon}
            text={info.text}
          />
        ))}
      </div>
    </div>
  );
};
Contact.propTypes = {
  info: PropTypes.array.isRequired,
};

export default Contact;
