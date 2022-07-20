// Applicazione Javascript

const clientAge = prompt('Gentile Cliente, indichi la sua età');
const clientKm = prompt('Gentile Cliente, indichi qui i km che intende percorrere');

let priceTotal = Math.floor (clientKm * 0.21);
let discountMin = (priceTotal / 100) * 20;
let discountMax = (priceTotal / 100) * 40;

if (clientAge < 18) {
    priceTotal = (priceTotal - discountMin)
}

if (clientAge > 65) {
    priceTotal = (priceTotal - discountMax)
}

alert('Il prezzo totale da pagare è di € ' +priceTotal)



