import './styles.css'

export class MetaMascara {
    private popupElement: HTMLElement | null;

  
    constructor() {
        this.popupElement = document.getElementById("popup");
    }

    show(){
        if (this.popupElement) {
            //this.popupElement.style.display = "block";

            // texto en la en el elemento popup
            this.popupElement.innerText = 'popup';
           
            // crear boton dentro el elemento popup
            this.popupElement.innerHTML = `
            <h1>Popup</h1>
            <button id="closeBtn">Cerrar</button>
            `;
            
            // metodo para cerrar el el popup 
            const closeBtn = this.popupElement.querySelector("#closeBtn") as HTMLButtonElement;
            if (closeBtn) {
                closeBtn.addEventListener("click", () => {
                    this.hide();
                });
            }
        } else {
            console.error('Elemento de pop-up no encontrado');
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