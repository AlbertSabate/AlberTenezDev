import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Header.css';

const Header = (props) => {
  return (
    <header className="header">
      <div className="logo">
        <img alt={props.info.name} src={props.info.logo} />
        <span>{props.info.name}</span>
      </div>
      <nav>
        <ul>
          {props.info.menu.map(info => (
            <li key={info.id}>
              <AnchorLink
                href={info.href}
                offset={props.info.offset}
              >
                {info.text}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
Header.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Header;
