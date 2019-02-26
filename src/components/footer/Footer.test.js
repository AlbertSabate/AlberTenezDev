import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import Footer from './Footer';

const { Footer: FooterAnt, } = Layout;

describe('#Footer', () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer component={FooterAnt} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
