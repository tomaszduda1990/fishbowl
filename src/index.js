import Fishbowl from './scripts/fishbowl';
import './style.scss';

const bowl = document.querySelector('.aquarium__bowl');
const stats = document.querySelector('.stats__container');

const fishbowl = new Fishbowl(bowl, stats);
fishbowl.init();
