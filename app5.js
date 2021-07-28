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
        
        //check if the tag has attributes
        if(this.hasAttribute("heading-color")){
            this.shadowRoot.querySelector(".heading").getElementsByClassName.color = this.getAttribute('heading-color');
        }
    }
}
customElements.define('my-card',CardComponent);
