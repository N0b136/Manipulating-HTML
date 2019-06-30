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
    $('#colors').mouseover(function(){
        $(this).css('background-color','blue');
    });
    $('#colors').mouseout(function(){
        $(this).css('background-color','white');
    });

    //Number 4
    $('#4').append('<p>This changes color if you click on it</p>')
    $('p:contains("This changes")').click(function(){
        $(this).css('color','red');
    });
});