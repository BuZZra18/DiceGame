//Two variables to represent two dices which can roll number from 1 to 6.
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

//Two variables to store the file path of the image of the generate random number.
var randomImg1 = "./images/dice" + randomNumber1 + ".png";
var randomImg2 = "./images/dice" + randomNumber2 + ".png";

//Relevant image to be displayed according to the t he number generate
document.querySelector(".img1").setAttribute("src",randomImg1);
document.querySelector(".img2").setAttribute("src",randomImg2);

//if else statements to declare win, loss or draw if the conditions are met.
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw";
}

else {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}