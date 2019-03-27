import React from 'react';
import ReactDOM from 'react-dom';
import ContactBox from './ContactBox';

describe('#ContactBox', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContactBox href="" text="" icon={() => null} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
