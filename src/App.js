import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Loading from './components/loading/Loading';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

import headerImg from './img/bg-original-min.jpg';

const {
  Content,
  Header: HeaderAnt,
  Footer: FooterAnt,
} = Layout;

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="app">
        {loading && <Loading />}
        <Layout className="layout">
          <Header component={HeaderAnt} />
          <Content className="container">
            <div id="home" className="home" style={{ backgroundImage: `url(${headerImg})` }}>
              <div className="introText">
                <span className="myName">Albert Sabate</span>
                <p className="workTitle">Senior Software Engineer</p>
              </div>
              <AnchorLink href="#about" offset="64"><Icon type="arrow-down" /></AnchorLink>
            </div>
            <div id="about" className="about">
              <br />
              <br />
              <br />
              <br />
              about
              <br />
              <br />
              <br />
              <br />
            </div>
            <div id="what" className="what">
              <br />
              <br />
              <br />
              <br />
              what
              <br />
              <br />
              <br />
              <br />
            </div>
            <div id="works" className="works">
              <br />
              <br />
              <br />
              <br />
              works
              <br />
              <br />
              <br />
              <br />
            </div>
            <div id="contact" className="contact">
              <br />
              <br />
              <br />
              <br />
              contact
              <br />
              <br />
              <br />
              <br />
            </div>
          </Content>
          <Footer component={FooterAnt} />
        </Layout>
      </div>
    );
  }
}

export default App;
