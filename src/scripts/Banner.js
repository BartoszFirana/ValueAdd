import resize from './index';
import bannerDesktop from '../images/desktop_banner_photo.png';
import bannerTablet from '../images/tablet_banner_photo.png';
import bannerPhone from '../images/phone_banner_photo.png';

export default class Banner {

    contentSource = null;
    pageSize = null;
    pictureVersion = null;

    constructor(basicNode) {
        this.basicNode = basicNode;
    }

    init() {

        this.pageSize = window.innerWidth;

        this.source();

        this.setPageWidth();

        resize(this.setPageWidth);

    }

    render() {

        const picture = (pageSize) => {
            if (pageSize >= 768) {
                return this.pictureVersion = bannerDesktop;
            }
            if (pageSize < 768 && pageSize >= 360) {
                return this.pictureVersion = bannerTablet;
            }
            if (pageSize < 360) {
                return this.pictureVersion = bannerPhone;
            }
        }

        picture(this.pageSize);

        this.basicNode.innerHTML = `
            <img class="desktop__banner" src="${this.pictureVersion}" alt="">
                        <div class="banner__text sitewidth">
                            <h2>${this.contentSource.title}</h2>
                            <p>
                                ${this.contentSource.paragraph}
                            </p>
                            <button class="banner__button layout__button">
                                Write Us
                            </button>
                        </div>
        `;

    }

    source() {

        const contentSource = {
            title: "Angular House is part of ValueAdd company",
            paragraph: "Over 92% of computers are infected with Adware and spyware. Such software is rarely accompaied by uninstall utility and even when it is it almost always leaves broken Windows Registry keys behind it."
        };

        this.contentSource = contentSource;

    }

    setPageWidth = () => {

        this.pageSize = window.innerWidth;

        this.render()

    }
}