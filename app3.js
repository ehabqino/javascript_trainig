(function($){

    //creation
    const myCustomModule = (function(){

        function changeCss(selector,cssPros){
            $(selector).css(cssPros);
        }

        return {
            css : changeCss
        };
    })();

    // registration
    if(!window.myCustomModule){
        window.CSSAPI = myCustomModule;
    }
})();