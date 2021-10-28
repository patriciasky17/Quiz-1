let add = document.getElementById('increment');
let substract = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function() {
    integer += 1;
    int.innerHTML = integer;
});

add.addEventListener('click', function() {
    changeBackgroundColor();
})

substract.addEventListener('click', function() {
    integer -= 1;
    int.innerHTML = integer;
});

substract.addEventListener('click', function() {
    changeBackgroundColor();
})

function changeBackgroundColor() {
if (integer > 5) {
    document.getElementById('number').style.backgroundColor = 'rgb(252, 190, 252)';
} else if (integer >= -5 && integer <= 5) {
    document.getElementById('number').style.backgroundColor = "white";
} else if (integer < -5 && integer > -9) {
    document.getElementById('number').style.backgroundColor = "rgb(154, 154, 255)";
} else if (integer < -9) {
    alert("Kembali ke home");   
    window.history.back();
}};


let bgChanger = document.getElementById('number');
var colorChange = function (color) {
    document.body.style.background = color;
}





