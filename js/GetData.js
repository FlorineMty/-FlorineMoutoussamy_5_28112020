const GetData = new Object (
    {

        getVarnish : function (){
            let label = document.createElement("label");
            label.textContent = "Select a varnish: ";
            let varnish = document.createElement("select");
            let selection = article.varnish;
            articleDescription.appendChild(label);
            label.appendChild(varnish);
            varnish.id = "varnishSelection";
    
            article.varnish.forEach((product) => {
                let options = document.createElement("option");
                options.id = "varnish";
                options.textContent = product;
                options.value = product;
                varnish.appendChild(options); 
                });
        }


    }
);

export { GetData };