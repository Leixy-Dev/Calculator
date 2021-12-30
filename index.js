const screene = document.querySelector('.calculator-screen');

function PressButton(item) {
    screene.value = screene.value + item.innerHTML;
}

function EqualBtn() {
    let equa = screene.value;
    let res = eval(equa);
    screene.value = res;
}

function Clear() {
    screene.value = '';
}
