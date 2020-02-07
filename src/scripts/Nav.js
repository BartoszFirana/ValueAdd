import resize from './index';
import Logo from '../images/Logo - white.svg';
import hamburger from '../images/icon_hamburger.svg';

export default class Nav {

    pageSize = null;

    constructor(basicNode) {
        this.basicNode = basicNode;
    }

    init() {

        this.pageSize = window.innerWidth;

        this.setPageWidth();

        resize(this.setPageWidth);

    }

    render() {
        const desktopNav = `
            <div class="container spacebetween">
                <div class="logo">
                    <a href=""><img class="layout__logo" src="${Logo}" alt="Angular House"></a>
                </div>
                <div class="nav__center">
                    <ul class="nav__list">
                        <li><a href="/">Strona Główna</a></li>
                        <li><a href="/">Baza wiedzy</a></li>
                        <li><a href="/">Open source</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a class="nav__item--active" href="/">Hire Us</a></li>
                    </ul>
                </div>
                <button class="nav__login layout__button">Login</button>
            </div>
        `;

        const mobileNav = `
            <div class="container spacebetween mobile__nav">
                <div class="logo">
                    <a href=""><img class="layout__logo" src="${Logo}" alt="Angular House"></a>
                </div>
                <button class="layout__hamburger"><img src="${hamburger}"></button>
            </div>
        `;

        this.basicNode.innerHTML = `
            ${this.pageSize >= 1260 ? desktopNav : mobileNav}
        `;
    }

    setPageWidth = () => {

        this.pageSize = window.innerWidth;

        this.render()

    }

}