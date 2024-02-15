import './styles.css'

export class MetaMascara {
    //declaracion de popupElement que es el div popup

    private popupElement: HTMLElement | null | undefined;

    //propiedades para la configuracion del contenido del popup 
 
    private text = 'popup'

    // entra al constuctor y crea el lemento 
    constructor() {
        this.createPopupElement();
    }
   
    // metodo para crear el elemento div con la refencia popup
    private createPopupElement() {
        // crear elemento div
        this.popupElement = document.createElement('div');
        // crear una refencia local en el div previamente creado 
        this.popupElement.id = 'popup';
         // Cambiado para adjuntar al cuerpo
        document.body.appendChild(this.popupElement); 
    }
     
    //metodo para mostrar el popup 
    show() {
        if (!this.popupElement) {
            // Crea el elemento si aún no existe
            this.createPopupElement();
        }
    
        // Verificación de nulidad antes de acceder a popupElement
        if (this.popupElement) {
            // Concatena el texto y el botón antes de asignar el contenido
            this.popupElement.innerHTML = `
                <p>${this.text}</p>
                <button id="closeBtn">Cerrar</button>
            `;
            
            // crear el boton con la referenia local closeBtn y darle las propieades que necesita un boton 
            const closeBtn = this.popupElement.querySelector("#closeBtn") as HTMLButtonElement;
            // Verificacion de nulidad del boton
            if (closeBtn) {
                // crear el metodo del boton para  poder hacer click y llamar al metodo hide()
                closeBtn.addEventListener("click", () => {
                    this.hide();
                });
            }
             
            // agregar el metodo show a el metodo popup
            this.popupElement.classList.add("show");
            console.log('popup creado');
        }
    }


    hide() {
        /*if (this.popupElement) {
            this.popupElement.style.display = "none";
        }*/

        // verificar la nulidad del elemento popup
        if (this.popupElement) {
            // remover el popup de la lista del elemento
            this.popupElement.remove();
            // se hace nulo 
            this.popupElement = undefined;
        }
    }

}


/*connect(){
    alert("este metodo ahora esta implemnetado")
}*/