import patternImg from '../../images/Pattern.svg';
import developmentImg from '../../images/icon_development.svg';
import audytImg from '../../images/icon_audyt.svg';
import consultingImg from '../../images/icon_consulting.svg';

export default class Passion {

    contentSource = null;

    constructor(basicNode) {
        this.basicNode = basicNode;
    }

    init() {

        this.source();

        this.render();

    }

    render() {

        this.basicNode.innerHTML = this.contentSource.map(item => (`
            <div class="section__passions--item">
                <img class="section__pattern" src="${patternImg}" alt="">
                <img src="${item.picture}" alt="Development Passion in Angular House">
                <h3>${item.name}</h3>
                <p>${item.paragraph}</p>
            </div>
            `
        )).join("");

    }

    source() {

        const contentSource = [
            {
                name: "Development",
                picture: developmentImg,
                paragraph: "Living in today's metrpolitan world of cellular phones, mobile computers."
            },
            {
                name: "Audyt",
                picture: audytImg,
                paragraph: "It is a good idea to think of your PC as an office. It stores files, programs, pictures."
            },
            {
                name: "Consulting",
                picture: consultingImg,
                paragraph: "Last month, my wife, Anne Doe, took me to Las Vegas becaouse she had to go"
            }
        ]

        this.contentSource = contentSource;

    }

}