import resize from '../index';

export default class Partners {

    pageSize = null;
    contentSource = null;

    constructor(basicNode) {
        this.basicNode = basicNode;
    }

    init() {

        this.pageSize = window.innerWidth;

        this.setPageWidth();

        resize(this.setPageWidth);

    }

    render() {

        if (this.pageSize < 768) {

            this.contentSource = null;
            this.basicNode.innerHTML = ``;

        }

        if (this.pageSize >= 768) {

            this.source();

            this.basicNode.innerHTML = `
            <h2 class="section__title">Trusted Us</h2>
                <div class="section__trustedus">
                    ${this.contentSource.map(item => (`
                        <div class="section__trustedus--item">
                            ${item.name}
                        </div>
                    `)).join("")}
                </div>
            `

        }

    }

    source() {

        const contentSource = [
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
            {
                name: "cocacola",
                picture: ""
            },
        ]

        this.contentSource = contentSource;

    }

    setPageWidth = () => {

        this.pageSize = window.innerWidth;

        this.render()

    }
}