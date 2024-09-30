let counter = 0;
let counterMaxLimit = 5;
let counterMinLimit = 0;

function btnAdd() {

   counter = ++counter <= counterMaxLimit ? counter : counterMaxLimit;
    WriteCounter(counter)

}
function btnMinus() {
    counter = --counter >= counterMinLimit ? counter : counterMinLimit;
    WriteCounter(counter)

}
function btnReset() {
    WriteCounter(0)
}

function WriteCounter(num) {
    document.getElementById("counterResult").innerHTML = num
}