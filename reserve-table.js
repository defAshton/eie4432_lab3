var booked;
var bookedString;
$(document).ready(function(){
    if (!localStorage.getItem("bookedTable")) {
            localStorage.setItem("bookedTable", JSON.stringify([]));
        }
        bookedString = localStorage.getItem("bookedTable");
        

        if (bookedString) {
            booked = JSON.parse(bookedString);
        } else {
            booked = {};
        }
    
    var tables = document.getElementsByClassName('table');
    for (i=0;i<tables.length;i++){
        var table = $(tables[i]);
        var tableID=table.attr('id');
        if (Object.keys(booked).includes(tableID)){
            table.addClass("booked");
        }
}
    
})
function confirm(){

    if (booked.includes(selectedTableNumber)==false) booked.push(selectedTableNumber);
    $('#'+selectedTableNumber).addClass('booked');
    localStorage.setItem("bookedTable",JSON.stringify(booked));
    $('#buttons').addClass('d-none');
    text.textContent = 'Click a Table to book.';
}

function dismiss(){
    text.textContent = 'Click a Table to book.';
    $('#buttons').addClass('d-none');
}
