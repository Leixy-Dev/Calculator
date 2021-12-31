const screene = document.querySelector('.container .calculator-screen');
const math = require('mathjs');

function PressButton(item) {
    screene.value = screene.value + item.innerHTML;
}

async function EqualBtn() {
    let calcul = screene.value;
    let res = eval(calcul);
    screene.value = res;
}

function Clear() {
    screene.value = '';
}
