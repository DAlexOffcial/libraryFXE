import './styles.css'

export class MetaMascara {
    private popupElement!: HTMLElement | null;

    private text = 'popup'

    // entra al constuctor y crea el lemento 
    constructor() {
        this.createPopupElement();
    }
   
    // metodo para crear el elemento div con la refencia popup
    private createPopupElement() {
        this.popupElement = document.createElement('div');
        this.popupElement.id = 'popup';
        document.body.appendChild(this.popupElement);  // Cambiado para adjuntar al cuerpo
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
    
            const closeBtn = this.popupElement.querySelector("#closeBtn") as HTMLButtonElement;
            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    this.hide();
                });
            }
    
            this.popupElement.classList.add("show");
            console.log('El pop-up va aquí');
        }
    }


    hide() {
        /*if (this.popupElement) {
            this.popupElement.style.display = "none";
        }*/
        if (this.popupElement) {

            this.popupElement.remove();

            this.popupElement = null;
        }
    }

}


/*connect(){
    alert("este metodo ahora esta implemnetado")
}*/