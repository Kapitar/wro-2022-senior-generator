function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

var scanColors = ["green", "white", "green", "white"]
shuffle(scanColors)

var scanYellow = document.getElementsByClassName('yellow-room mark-block')[0].classList.add(scanColors[0])
var scanBlue = document.getElementsByClassName('blue-room mark-block')[0].classList.add(scanColors[1])
var scanRed = document.getElementsByClassName('red-room mark-block')[0].classList.add(scanColors[2])
var scanGreen = document.getElementsByClassName('green-room mark-block')[0].classList.add(scanColors[3])

var clothesColors = ["black", "yellow", "red", "none"]
shuffle(clothesColors)

var scanYellow = document.getElementsByClassName('yellow-room clothes-block')[0].classList.add(clothesColors[0])
var scanBlue = document.getElementsByClassName('blue-room clothes-block')[0].classList.add(clothesColors[1])
var scanRed = document.getElementsByClassName('red-room clothes-block')[0].classList.add(clothesColors[2])
var scanGreen = document.getElementsByClassName('green-room clothes-block')[0].classList.add(clothesColors[3])