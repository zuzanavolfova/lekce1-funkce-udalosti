// tady je místo pro náš program

document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
    let c = a + b;
    return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
    alert("Gratulace, právě jsi spustila tuto funkci!");
}

function zmenBarvuCtverecku(elementSelector) {
    document.querySelector(elementSelector).style.backgroundColor = 'green';

}

/*function upravBarvu(elementSelector) {
	document.querySelector(elementSelector).style.backgroundColor = 'green';
}*/