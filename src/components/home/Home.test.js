import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

describe('#Home', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home info={{}} offset={50} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
