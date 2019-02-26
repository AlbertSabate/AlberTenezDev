import React, { Component } from 'react';
import { Layout, Divider } from 'antd';
import Loading from './components/loading/Loading';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import './App.css';

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
            <Home />
            <div id="about">
              <Divider><h3>About</h3></Divider>
              <div className="about">
                <div>
                  asd
                </div>
                <div>
                  asd
                </div>
              </div>
            </div>
            <div id="what">
              <Divider><h3>What I do</h3></Divider>
              <div className="what">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
            <div id="works">
              <Divider><h3>Works</h3></Divider>
              <div className="works">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
            <Contact />
          </Content>
          <Footer component={FooterAnt} />
        </Layout>
      </div>
    );
  }
}

export default App;
