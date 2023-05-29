import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Dancing Club',
    desc:
      'This Website is Devloped in HTML5,CSS,JavaScript. It benificial for growth of Dancing club ',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc:
      'This Porfolio Website is devloped in Reactjs. Ofcourse Overall information taken in this web application ',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Attendance Management System',
    desc:
      'This Website is devloped in Django for Backend And Html5,Css and JavaScript for Front end',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Ecommerce Website',
    desc:
      'This Web application is Developed in Django and React Framework.This website is easy to use for online shopping',
    img: CavinImg,
  },
];

export default projects;
