import React from 'react';
import ReactDOM from 'react-dom';
import Expertise from './Expertise';

describe('#Expertise', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Expertise />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
