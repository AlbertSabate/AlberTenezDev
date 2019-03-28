import React from 'react';
import PropTypes from 'prop-types';
import { GoArrowSmallDown } from 'react-icons/go';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Home.css';

const Home = (props) => {
  return (
    <div id="home" className="home" style={{ backgroundImage: `url(${props.info.headerImg})` }}>
      <div className="introText">
        <h1>{props.info.title}</h1>
        <h2>{props.info.subtitle}</h2>
      </div>
      <AnchorLink href={props.info.href} offset={props.info.offset}>
        <GoArrowSmallDown />
      </AnchorLink>
    </div>
  );
};
Home.propTypes = {
  info: PropTypes.object.isRequired,
  offset: PropTypes.number.isRequired,
};

export default Home;
