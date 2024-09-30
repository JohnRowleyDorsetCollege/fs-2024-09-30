let counter = 0;
let counterMaxLimit = 5;
let counterMinLimit = 0;

$(function () {


    init();

})

function init() {
    console.log('jquery goodness has loaded');

    $('#btnAdd').on('click', function () {
        counter = ++counter <= counterMaxLimit ? counter : counterMaxLimit;
        WriteCounter(counter)
    });
    $('#btnMinus').on('click', function () {
        counter = --counter >= counterMinLimit ? counter : counterMinLimit;
        WriteCounter(counter)
    });
    $('#btnReset').on('click', function () { WriteCounter(0) });


}


function WriteCounter(num) {
   $("#counterResult").html( num)
}