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







}); //END