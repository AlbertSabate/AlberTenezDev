import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import Header from './Header';

const { Header: HeaderAnt, } = Layout;

describe('#Header', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header component={HeaderAnt} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
