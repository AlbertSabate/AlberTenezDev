import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('#Loading', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render the exact schema because css is in index.html', () => {
    const actual = shallow(
      <Loading />
    );
    const expected = (
      <div className="loading">
        <div className="loading-bounce"></div>
        <div className="loading-bounce"></div>
      </div>
    );

    expect(actual.matchesElement(expected)).toBeTruthy();
  });
});
