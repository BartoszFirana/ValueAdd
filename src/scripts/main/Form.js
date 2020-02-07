export default class Form {
    constructor(basicNode) {
        this.basicNode = basicNode;
    }

    init() {

        this.render();

    }

    render() {
        this.basicNode.innerHTML = `
        <h2 class="section__title">Write Us</h2>
            <form action="/">
                <fieldset class="fieldset">
                    <h2>Potrzebujesz pomocy z projektem?</h2>
                    <p>Napisz do nas, jesteśmy profesjonalistami w temacie programowania, consultingu i audytu IT</p>
                    <label class="fieldset__label">
                        <strong>Imię i nazwisko</strong>
                        <input class="fieldset__input" type="text" name="fullname" placeholder="Jan Kowalski">
                    </label>
                    <label class="fieldset__label">
                        <strong>Adres e-mail</strong>
                        <input class="fieldset__input" type="email" name="email"
                            placeholder="jan.kowalski@mojafirma.pl" />
                    </label>
                    <label class="fieldset__label">
                        <strong>Numer telefonu</strong>
                        <input class="fieldset__input" type="tel" name="phone" placeholder="+48 285 285 687">
                    </label>
                    <label class="fieldset__label">
                        <strong>Temat</strong>
                        <select class="fieldset__input" name="topic">
                            <option value="Consulting">Consulting</option>
                        </select>
                    </label>
                    <label class="fieldset__label">
                        <strong>Treść</strong>
                        <input class="fieldset__input" type="text" name="text"
                            placeholder="Tutaj wpisz treść wiadomości...">
                    </label>
                    <label class="fieldset__label">
                        <input type="checkbox" name="regulations">
                        Wysyłając wiadomość zgadzasz się na przekazanie nam Twoich danych osobowych
                    </label>
                    <input class="layout__button" type="submit" value="Wyślij">
                </fieldset>
            </form>
        `;
    }
}