import bannerDesktop from '../images/desktop_banner_photo.png';

export default class Banner {

    contentSource = null;

    constructor(basicNode) {
        this.basicNode = basicNode;
    }

    init() {

        this.source();

        this.render();

    }

    render() {

        console.log(this.basicNode)

        this.basicNode.innerHTML = `
            <img class="desktop__banner" src="${bannerDesktop}" alt="">
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
}