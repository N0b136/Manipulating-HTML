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
        //$(this).css('color','red');
        let rc1 = Math.floor(Math.random()*256);
        let rc2 = Math.floor(Math.random()*256);
        let rc3 = Math.floor(Math.random()*256);
        $(this).css('color', 'rgb('+rc1+','+rc2+','+rc3+')');
    });

    //Number 5
    $('#5').append('<button id="nbtn">Name</button');
    $('#5').append('<div id="name"></div>')
    $('#nbtn').click(function(){
        $('#name').text('Ryan');
    });

    //Number 6
    let friends = ['Rae','Schuyler','Cole','Sonni','Thomas','Lauren','Jeremiah','Rebecca','Jon','Ajulu']
    $('#add').click(function(){
        for (const f of friends) {
            $('#ul').append('<li>'+f+'</li>');
        };
    });
});