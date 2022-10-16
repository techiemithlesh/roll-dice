var placeholder = document.querySelector('.placeholder');
var btn = document.querySelector('.btn');

var dice = {
    sides: 6,
    roll: function () {
        var randNumber = Math.floor(Math.random() * this.sides) + 1;
        return randNumber;
    }
}


var printNumber = (Number) => {
    placeholder.innerHTML = Number;
}

btn.addEventListener('click', () => {
    var result = dice.roll();
    printNumber(result);
})