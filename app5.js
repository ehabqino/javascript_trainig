class CardComponent extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        this.attachShadow({mode:'open'});
        this.render();

    }
    
    render(){
        const cardTemplate = document.querySelector("#my-template");
        const cardTemplateContent = cardTemplate.content;

        this.shadowRoot.appendChild(cardTemplateContent.cloneNode(true));
    }
}
customElements.define('my-card',CardComponent);
