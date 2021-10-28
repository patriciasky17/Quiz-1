// random color hex
var btnChange = document.getElementById('change');
var text = document.getElementById('colour');
var btnBack = document.getElementById('back');

var generator = function() {
    newColour = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
    console.log(newColour.length);
    if (newColour.length < 7) {
        generator();
    }
}

btnChange.addEventListener ('click', function() {
    generator();

    document.body.style.background = newColour;
    btnChange.style.color = newColour;
    btnBack.style.color = newColour;
    text.innerText = newColour;
});

btnBack.addEventListener ('click', function() {
    window.history.back();
});