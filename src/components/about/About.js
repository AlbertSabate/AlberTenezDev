import React from 'react';
import PropTypes from 'prop-types';
import './About.css';

const About = (props) => {
  console.log('About', props);
  return (
    <div id="about">
      <h3>About</h3>
      <div className="about">
        <img src={props.info.small_avatar_url} alt={props.info.name} title={props.info.name} />
        <div className="name">{props.info.name}</div>
        <div className="headline">{props.info.headline}</div>
        <div className="text">{props.info.about}</div>
      </div>
    </div>
  );
};
About.propTypes = {
  info: PropTypes.object,
};

export default About;
