import React from 'react';
import PropTypes from 'prop-types';
import './Expertise.css';

const Expertise = (props) => {
  return (
    <div id="expertise">
      <h3>EXPERTISE</h3>
      <div className="expertises">
        {props.info.map(expertise => (
          <div className="expertise" key={expertise.category.display_name}>
            <h5>{expertise.category.display_name}</h5>
            <div className="description">{expertise.description}</div>
            <ul className="tags">
              {expertise.tags.map(tag => (
                <li key={tag.display_name} className="tag">
                  {tag.display_name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
};
Expertise.propTypes = {
  info: PropTypes.array.isRequired,
};

export default Expertise;
