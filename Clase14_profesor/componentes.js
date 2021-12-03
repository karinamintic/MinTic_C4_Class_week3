class SaludoElemento extends HTMLElement{
    constructor(){
        super();
        this.saluda="Hola, Stid";
    }


    connectedCallback(){// evento se invoca al agregar al DOM
        //console.log("metido en la pagina")
        let negrita=document.createElement("strong");
        //negrita.innerHTML=thsi.saluda;
        negrita.innerHTML=this.saluda;
        this.appendChild(negrita);


    }

     attributeChangeCallback(nombre,viejoValor,nueValor){// evento cuando cambia de valor un elemento
       
     }

     disconnectedCallback(){
         
     }

}

window.customElements.define("saludo-basico",SaludoElemento);

class sumaNumeros extends HTMLElement{

    divPrincipal=document.createElement("DIV");
    salto=document.createElement("br");
    contador=1;
    UIDsuma = "";

    constructor(){
        super();
    }

    connectedCallback(){ //disconnectedCallback 
        
        this.UIDsuma="id_" + Math.floor(Math.random() * 999999);
        this.setAttribute("id",this.UIDsuma);// id este elemnto 
        ///  aducionar numero text
        var botonNewNum = document.createElement("INPUT");
        botonNewNum.setAttribute("type","button");
        botonNewNum.setAttribute("value","+ num");
        botonNewNum.setAttribute("onClick","document.getElementById('"+this.UIDsuma+"').addText()");
        this.divPrincipal.appendChild(botonNewNum);// add boton 
        
        ///// adiicona sumar
        var botonSumaNum = document.createElement("INPUT");
        botonSumaNum.setAttribute("type","button");
        botonSumaNum.setAttribute("value","Sumar");
        botonSumaNum.setAttribute("onClick","document.getElementById('"+this.UIDsuma+"').sumarValores()");
        this.divPrincipal.appendChild(botonSumaNum);

        this.appendChild(this.salto);// salto de linea

        this.addText();// adicionamos 1ra caja num

        
        
        this.appendChild(this.divPrincipal);
        
    }

    addText(){
                
        var text1 = document.createElement("INPUT");
        text1.setAttribute("type", "number"); 
        text1.setAttribute("value", "0"); 
        text1.setAttribute("id", "num"+this.contador); 
        this.contador++;
        
        this.divPrincipal.appendChild(this.salto);
        this.divPrincipal.appendChild(text1);
    }

    sumarValores(){
        var sumaTotal=0;
        var numeros=this.divPrincipal.querySelectorAll("input[type=number]");
        for(var i=0;i<numeros.length;i++)
        {
            sumaTotal+=numeros[i].value*1;
        }

        alert("La suma es: "+sumaTotal);
    }
}

window.customElements.define("suma-numeros",sumaNumeros);