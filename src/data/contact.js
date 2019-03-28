import uuid from 'uuid/v1';
import { MdContactPhone, MdContactMail, MdLaptop } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const contact = [{
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
}];

export default contact;
