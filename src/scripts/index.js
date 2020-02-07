import Nav from './Nav';
import Banner from './Banner';
import Passion from './main/Passion';
import Form from './main/Form';
import Partners from './main/Partners';

export default function resize(method) {
    window.addEventListener('resize', method);
}

const navNode = document.querySelector('nav');
const bannerNode = document.querySelector('.banner');
const passionNode = document.querySelector('.section__passions');
const formNode = document.querySelector('.writeus');
const partnersNode = document.querySelector('.trustedus');

const nav = new Nav(navNode);
nav.init();

const banner = new Banner(bannerNode);
banner.init();

const passion = new Passion(passionNode);
passion.init();

const form = new Form(formNode);
form.init();

const partners = new Partners(partnersNode);
partners.init();