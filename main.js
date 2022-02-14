// tady je místo pro náš program

function zobrazVysledek(selector, a, b) {
    document.querySelector(selector).innerHTML = secti(a, b);
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

let a = Number(
    prompt('vlož první číslo'))
let b = Number(prompt('vlož druhé číslo'))

function secti(a, b) {
    return a + b;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
    alert("Gratulace, právě jsi spustila tuto funkci!");
    console.log("Gratulace, právě jsi spustila tuto funkci!");
    let ctverecek = document.querySelector('.ctverecek');
    ctverecek.innerHTML = "Gratulace, právě jsi spustila tuto funkci!";
    ctverecek.style.width = '380px';

}

function zmenBarvuCtverce() {
    document.querySelector('.ctverecek').style.backgroundColor = 'green';

}