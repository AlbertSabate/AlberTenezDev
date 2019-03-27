import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { MdContactPhone, MdContactMail, MdLaptop } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Loading from './components/loading/Loading';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Expertise from './components/expertise/Expertise';
import Employment from './components/employment/Employment';
import Contact from './components/contact/Contact';
import logo from './img/albert_icon_50.jpg';
import headerImg from './img/bg-original-min.jpg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    const offset = 50;
    this.state = {
      loading: true,
      header: {
        logo,
        name: 'Albert Sabate',
        offset,
        menu: [{
          id: uuid(),
          href: '#home',
          text: 'HOME',
        }, {
          id: uuid(),
          href: '#about',
          text: 'ABOUT',
        }, {
          id: uuid(),
          href: '#expertise',
          text: 'EXPERTISE',
        }, {
          id: uuid(),
          href: '#employment',
          text: 'EMPLOYMENT',
        }, {
          id: uuid(),
          href: '#contact',
          text: 'CONTACT',
        }],
      },
      home: {
        title: 'Albert Sabate Martinez',
        subtitle: 'Senior Software Engineer',
        offset,
        headerImg,
        href: '#about',
      },
      contact: [{
        id: uuid(),
        href: 'tel:+6590841575',
        icon: MdContactPhone,
        text: '+65 9084 1575',
      }, {
        id: uuid(),
        href: 'mailto:albert@sabatemartinez.com',
        icon: MdContactMail,
        text: 'albert@sabatemartinez.com',
      }, {
        id: uuid(),
        href: 'https://www.codementor.io/albertsabate',
        icon: MdLaptop,
        text: 'Codementor',
      }, {
        id: uuid(),
        href: 'https://www.linkedin.com/in/albertsabatemartinez/',
        icon: FaLinkedin,
        text: 'Linkedin',
      }, {
        id: uuid(),
        href: 'https://github.com/AlbertSabate',
        icon: FaGithub,
        text: 'Github',
      }],
      copyright: 'Albert Sabate Martinez © 2019',
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
        <Header info={this.state.header} />
        <div className="container" id="home">
          <Home info={this.state.home} />
          <About info={{}} />
          <Expertise />
          <Employment />
          <Contact info={this.state.contact} />
          <Footer copyright={this.state.copyright} />
        </div>
      </div>
    );
  }
}

export default App;
