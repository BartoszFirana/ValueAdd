import Nav from './Nav';
import Banner from './Banner';

const navNode = document.querySelector('nav');
const bannerNode = document.querySelector('.banner');

const nav = new Nav(navNode);
nav.init();

const banner = new Banner(bannerNode);
banner.init();