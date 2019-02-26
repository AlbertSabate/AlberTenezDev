import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import { Layout } from 'antd';
import App from './App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const {
  Content,
  Header: HeaderAnt,
  Footer: FooterAnt,
} = Layout;

describe('#App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should NOT render loading when the app is full loaded', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('loading')).toBe(false);
  });

  it('should render Content', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Content).length).toEqual(1);
  });

  it('should add FooterAnt to Footer as a prop', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Footer).length).toEqual(1);
    expect(wrapper.find(Footer).instance().props.component).toEqual(FooterAnt);
  });

  it('should add HeaderAnt to Header as a prop', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Header).length).toEqual(1);
    expect(wrapper.find(Header).instance().props.component).toEqual(HeaderAnt);
  });
});
