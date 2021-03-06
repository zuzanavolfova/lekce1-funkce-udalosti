// tady je místo pro náš program

/**
 * Zobrazí výsledek sečtení dvou čísel. Na sečtení se využívá interní funkce.
 * 
 * @param {int} a 
 * @param {int} b 
 */
function zobrazVysledek(a, b) {
	document.querySelector('#vysledek').innerHTML = secti(a, b);
}

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
	alert('Gratulace, právě si spustila tuto funkci!');
}

/**
 * Upraví barvu pozadí předaného prvku
 * 
 * @param {string} elementSelector 
 */
function upravBarvu(elementSelector) {
	document.querySelector(elementSelector).style.backgroundColor = 'green';
}