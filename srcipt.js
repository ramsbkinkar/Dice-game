var r1 = Math.random();
var player1 = Math.floor(r1*6)+1;

var r2 = Math.random();
var player2 = Math.floor(r2*6)+1; 

var randomImg1 = "./images/dice" + player1 + ".png";
var randomImg2 = "./images/dice" + player2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImg1);

document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if(player1 > player2){
    document.querySelector("h1").textContent = "🏆Player 1 won";
}
else if(player2 > player1){
    document.querySelector("h1").textContent = "🏆Player 2 won";
}
else if(player1 == player2){
    document.querySelector("h1").textContent = "Draw";
}
