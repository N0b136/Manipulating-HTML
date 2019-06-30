$(document).ready(function() {
    //Number 1
    $('#1').append('<button id="btn1">Click</button>');
    $('#btn1').click(function(){
        alert('I hope you have a wonderful day!');
    })

    //Nmber 2
    $('#btn2').click(function(){
        let input = $('#inpt').val();
        alert(input);
    });

    //Nmber 3
});