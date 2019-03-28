import React, { Component } from 'react';
import Loading from './components/loading/Loading';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Expertise from './components/expertise/Expertise';
import Employment from './components/employment/Employment';
import Contact from './components/contact/Contact';
import header from './data/header';
import home from './data/home';
import about from './data/about';
import expertise from './data/expertise';
import employment from './data/employment';
import copyright from './data/copyright';
import contact from './data/contact';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      offset: 50,
    };
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <div className="app">
        <Header info={header} offset={this.state.offset} />
        <div className="container">
          <Home info={home} offset={this.state.offset} />
          <About info={about} />
          <Expertise info={expertise} />
          <Employment info={employment} />
          <Contact info={contact} />
          <Footer copyright={copyright} />
        </div>
      </div>
    );
  }
}

export default App;
