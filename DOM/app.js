document.addEventListener('DOMContentLoaded', function() {
//number 1
let btn = document.createElement('button');
let btnTxt = document.createTextNode('Hello');
btn.appendChild(btnTxt);
document.getElementById('1').appendChild(btn);

btn.addEventListener("click", function() {
    alert("Have a Wonderful day.");
})

//number 2
let btn2 = document.createElement('button');
let btn2Text = document.createTextNode('Alert');
btn2.appendChild(btn2Text);
document.getElementById('2').appendChild(btn2);

let textBox = document.createElement('input');
textBox.setAttribute('type', 'text');
textBox.id = 'textBox';
document.getElementById('2').appendChild(textBox);

btn2.addEventListener('click', function() {
    let tbInput = textBox.value;
    alert(tbInput);
});

// number 3

let colorDiv = document.getElementById('colors');
colorDiv.addEventListener('mouseover', function() {
    colorDiv.style.backgroundColor = 'blue';
});
colorDiv.addEventListener('mouseout', function() {
    colorDiv.style.backgroundColor = 'white';
});

// number 4
let par = document.createElement('p');
let someText = document.createTextNode('This is some Rad Text that changes color');
par.appendChild(someText);
document.getElementById('4').appendChild(par);

par.addEventListener('click', function(){
    let rand1 = Math.floor(Math.random()*255);
    let rand2 = Math.floor(Math.random()*255);
    let rand3 = Math.floor(Math.random()*255);
    par.style.color = 'rgb('+rand1+','+rand2+','+rand3+')';
});

// Number 5
let btn3 = document.createElement('button');
let btn3Text = document.createTextNode('NAME');
btn3.appendChild(btn3Text);
document.getElementById('5').appendChild(btn3);
let emDiv = document.createElement('div');
document.getElementById('5').appendChild(emDiv);
btn3.addEventListener('click', function() {
    let name = document.createTextNode('Ryan');
    emDiv.appendChild(name);
});

// Number 6
let fnBtn = document.getElementById('add');
let friends = ['Rae', 'Schuyler', 'Ethan', 'Thomas', 'Lauren','Jeremiah','Jon','Will','Rebecca','Boyo'];
fnBtn.addEventListener('click', function() {
    for (const f of friends) {
        let friend = document.createTextNode(f);
        let li = document.createElement('li');
        li.appendChild(friend);
        document.getElementById('ul').appendChild(li);
    };
});

}); //END