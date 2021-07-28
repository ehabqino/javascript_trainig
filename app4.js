// create component from scratch we extends from HTMLElemet
/*
class MyComponent extends HTMLElement{
    constructor(){
        super();
        //console.log("Ehab");
    }

}//end MyComponent

customElements.define("ehab-qino",MyComponent);
*/

//============================================================
// customize HTMLElemet as example if we want to customize HTMLButtonElement
/*
class MyComponent extends HTMLButtonElement{
    constructor(){
        super();
        this.addEventListener('click',() => {
            console.log('hi from Custom Button')
        });
    }

}//end MyComponent

customElements.define("my-btn",MyComponent,{extends:'button'});
*/
//============================================================

class MyComponent extends HTMLElement{
    constructor(){
        super();
            
    }

    //connectedCallback run when component mount in DOM
    connectedCallback() {
        //console.log("hello from connectedCallback");
        this.attachShadow({mode : 'open'});
        //console.log(this.shadowRoot);
        const p = document.createElement('p');
        p.innerHTML = "Ehab Qino";
        this.shadowRoot.appendChild(p);
    }

    //disconnectedCallback run when component unmount in DOM
    disconnectedCallback() {
        console.log("hello from disconnectedCallback");
    }

    // static get observedAttributes(){
    //     return['']
    // }

    // attributeChangedCallback(name,oldValue,newValue){
    //     console.log(name,oldValue,newValue);
    // }
    

}//end MyComponent

customElements.define("my-test",MyComponent);
