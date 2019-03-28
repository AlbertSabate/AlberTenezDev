import uuid from 'uuid/v1';
import logo from '../img/albert_icon_50.jpg';

const header = {
  logo,
  name: 'Albert Sabate',
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
}

export default header;
