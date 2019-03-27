import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

describe('#Header', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header info={{
      menu: [],
    }} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
