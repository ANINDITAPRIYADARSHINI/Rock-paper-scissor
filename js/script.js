var choices = ["rock", "paper", "scissor"];
var i = Math.floor(Math.random() * 3);
var CompChoice = choices[i];
var UserPoints = 0;
var CompPoints = 0;
function score() {
    var score_div = document.getElementById("score").innerHTML = UserPoints + " : " + CompPoints;
}
setInterval(score, 50);


//convert words
function convert(word) {
    if(word === "rock") return '<i class="fa-solid fa-hand-back-fist"></i>';
    if(word === "paper") return '<i class="fa-solid fa-hand"></i>';
    if(word === "scissor") return '<i class="fa-solid fa-hand-scissors"></i>';
}



//game func.
function game(UserChoice) {
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice); 
    var compDiv = document.getElementById("compObject");
    compDiv.innerHTML = convert(CompChoice);
    if(UserChoice === "paper" && CompChoice ==="rock" || UserChoice === "rock" && CompChoice === "scissors" || UserChoice === "scissor" && CompChoice === "paper" ) {
        win(UserChoice);
    }

    else if (UserChoice === CompChoice) {
        draw(UserChoice);
    }
    else {
        loose(UserChoice);
    }
    function continueGame() {
        i = Math.floor(Math.random() * 3);
        CompChoice = choices[i];
        box.style.display = "none";
    }
    setTimeout(continueGame, 1200);
}

//win func
function win(bn) {
    UserPoints++;
    document.getElementById("who").innerHTML = "You Win!!";
    var bn = document.getElementById("rock");
    bn.classList.remove("bn");
    bn.classList.add("green");

    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("green");
    }, 1200);
}

//draw func
function draw(bn) {
    document.getElementById("who").innerHTML = "It's A Draw!";
    var bn = document.getElementById("paper");
    bn.classList.remove("bn");
    bn.classList.add("gray");

    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("gray");
    }, 1200);
}

//loose func
function loose(bn) {
    CompPoints++;
    document.getElementById("who").innerHTML = "You Loose....";
    var bn = document.getElementById("scissor");
    bn.classList.remove("bn");
    bn.classList.add("red");

    setTimeout(() => {
        bn.classList.add("bn");
        bn.classList.remove("red");
    }, 1200);
}
