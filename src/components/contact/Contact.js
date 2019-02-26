import React, { Component } from 'react';
import { Icon, Divider } from 'antd';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Divider><h3>Contact</h3></Divider>
        <div className="contact">
          <div><a href="tel:+6590841575"><Icon type="phone" /><br />+65 9084 1575</a></div>
          <div><a href="mailto:albert@sabatemartinez.com"><Icon type="mail" /><br />albert@sabatemartinez.com</a></div>
          <div><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/albertsabatemartinez/"><Icon type="linkedin" /><br />Linkedin</a></div>
          <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/AlbertSabate"><Icon type="github" /><br />Github</a></div>
        </div>
      </div>
    );
  }
}

export default Contact;
