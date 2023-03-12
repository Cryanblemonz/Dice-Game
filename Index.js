
let score1 = 0;
let score2 = 0;

let rollable = true;

document.querySelector(".roll").addEventListener('click', function() {
    buttonAnimation();
    let randomNumber1 = Math.floor(Math.random()*6+1);
    let randomNumber2 = Math.floor(Math.random()*6+1);
    let scoreBoard1 = document.querySelector('.score1');
    let scoreBoard2 = document.querySelector('.score2');


    document.querySelector(".img1").setAttribute('src', 'images/dice' + randomNumber1 + '.png');
    document.querySelector(".img2").setAttribute('src', 'images/dice' + randomNumber2 + '.png');
    
    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins!";
        score1++;
    } else if(randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
        score2++;
    } else if(randomNumber2 == randomNumber1) {
        document.querySelector("h1").innerHTML = "Draw!";
    }
    console.log(score1, score2);
    scoreBoard1.innerHTML = "Player 1: " + score1;
    scoreBoard2.innerHTML = "Player 2: " + score2;
});
 
function buttonAnimation(){
    document.getElementById('button').classList.add('pressed');
    setTimeout(function(){
        document.getElementById('button').classList.remove('pressed')}, 100);
}
