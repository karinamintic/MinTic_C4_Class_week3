class SaludoElemento extends HTMLElement
{
    saludo = "";
    constructor()
    {
        super();
        this.saludo = "Hola, Alvaro";
    }

    connectedCallback()
    {
        let negrita = document.createElement("strong");
        negrita.innerHTML = this.saludo;
        this.appendChild(negrita)
    }

    attributeChangeCallback()
    {

    }

}

window.customElements.define("saludo-basico", SaludoElemento);

class sumaNumeros extends HTMLElement
{
    divPrincipal = document.createElement("DIV");
    salto = document.createElement("br");
    contador = 1;
    UIDsuma = "";

    constructor()
    {
        super();
    }
    connectedCallback()
    {
        this.UIDsuma = "id_"+Math.floor(Math.random() * 999999);
        this.setAttribute("id",this.UIDsuma);

        var botonNewNum = document.createElement("INPUT");
        botonNewNum.setAttribute("type","button");
        botonNewNum.setAttribute("value","+ num");
        botonNewNum.setAttribute("onClick","alert('Dio clic');");

        this.divPrincipal.appendChild(botonNewNum);

        this.appendChild(this.divPrincipal);
    }
}

window.customElements.define("suma-numeros", sumaNumeros);