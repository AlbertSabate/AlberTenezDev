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
        <div className="codementorX">
          <a href="https://www.codementor.io/freelance-developers/javascript?utm_source=certified_badge&referral=albertsabate-" target="codementorx" rel="noopener noreferrer">
            <img src="https://assets.codementor.io/cmx-dev-badge.svg" alt="CodementorX" />
          </a>
        </div>
        <div className="cka">
          <a href="https://www.youracclaim.com/badges/476b2c37-e45e-4863-85ca-088e73723783/public_url" target="cka" rel="noopener noreferrer">
            <img src="https://images.youracclaim.com/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka%2Bfrom%2Bcncfsite%2B_281_29.png" alt="CKA" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
