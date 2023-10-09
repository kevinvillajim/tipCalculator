/**
 * Esta función te permite hacer un reset de los campos selecciónados por el usuario.
 * No se retorna nada. recuerca que algunos valores se hace el reset a 0, otros a 1
 */
export function reset(billInput, customPercentageBtn, peopleInput, tipAmountInput, totalInput) {
    billInput.value = 0;
    customPercentageBtn.value = "";
    peopleInput.value = 0;
    tipAmountInput.textContent = 0;
    totalInput.textContent = 0;
}


/**
 * Esta función te permite calcular el tip(propina) que se recibirá
 * por cada persona.
 * @returns el monto de tip por persona.
 */
export function calcularTip(bill, tip, people) {
    const tipAmount = ((bill*tip)/100)/ people;
    return tipAmount;
}

/**
 * Calcula el total a pagar por cada persona, incluyendo el tip que
 * le corresponde.
 * @returns el monto total por persona.
 */
export function calcularTotal(bill, tip, people) {
    const totalAmount = (((bill*tip)/100)/ people) + bill/people;
    return totalAmount;
}



/**
 * Valida si el valor de un campo es 0 o no, si lo es retorna true, si no, retorna false
 */
export function esCero(peopleInput) {
    if (peopleInput == 0){
        document.getElementById("zero").hidden = false;
        document.getElementById("input-people").className="input-invalid"
        document.getElementById("tip-amount").textContent="0.00"
        document.getElementById("total").textContent="0.00"
    }else{
        document.getElementById("zero").hidden = true;
        document.getElementById("input-people").className="input-people"
    }
}


/**
 * Añade la clase "active" al elemento.
 * @param { Node } input - un elemento input de html.
 * puedes investigar sobre : uso de classList en los elementos DOM. añadir, remover.
 */

export function claseActivo(buttons, activeButton) {
    buttons.forEach(button => {
        if (button === activeButton) {
            button.classList.add("btn-active");
        } else {
            button.classList.remove("btn-active");
        }
    });
}