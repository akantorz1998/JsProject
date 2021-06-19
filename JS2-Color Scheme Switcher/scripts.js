document.getElementById('grayBtn').onclick = switchGray;
document.getElementById('whiteBtn').onclick = switchWhite;
document.getElementById('blueBtn').onclick = switchBlue;
document.getElementById('yellowBtn').onclick = switchYellow;

function switchGray() {
    document.body.style.backgroundColor = 'gray';
    document.body.style.color = 'white';
}

function switchWhite() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

function switchBlue() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
}

function switchYellow() {
    document.body.style.backgroundColor = 'yellow';
    document.body.style.color = 'black';
}