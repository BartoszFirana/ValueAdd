export default class Partners {

    contentSource = null;

    constructor(basicNode) {
        this.basicNode = basicNode;
    }

    init() {

        this.source();

        this.render();

    }

    render() {

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
}