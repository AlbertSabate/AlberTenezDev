import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

describe('#About', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About info={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
