import React from 'react';
import ReactDOM from 'react-dom';
import Employment from './Employment';

describe('#Employment', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Employment />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
