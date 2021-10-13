function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
//just set the name of the function
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
console.log(greenButton);
//anonymous function
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

//handle by using add EventListener
const goldenrod = document.getElementById('make-goldenRod');
goldenrod.addEventListener('click', makeGoldenrod)

function makeGoldenrod() {
    document.body.style.backgroundColor = 'goldenrod';
}
//add eventlistener
const hotpink = document.getElementById('make-hotpink');
hotpink.addEventListener('click', function makeHotpink() {
    document.body.style.backgroundColor = 'hotpink';
})
//direct shortcut
document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})