import React from 'react';
import PropTypes from 'prop-types';
import './Employment.css';

const Employment = (props) => {
  return (
    <div id="employment">
      <h3>EMPLOYMENT</h3>
      <div className="employments">
        {props.info.map(employment => (
          <div className="employment" key={employment.random_key}>
            <h5>{employment.title} @{employment.company_name}</h5>
            <h6>
              {employment.start_at} - {employment.end_at ? employment.end_at : 'Currently'} in {employment.location}
            </h6>
            <pre>{employment.description}</pre>
          </div>
        ))}
      </div>
    </div>
  )
};
Employment.propTypes = {
  info: PropTypes.array.isRequired,
};

export default Employment;
