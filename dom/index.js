
six(1);
six(2);

let randomPlayer1 = 0;
let randomPlayer2 = 0;

function randomGen(){
    randomPlayer1 = Math.floor(Math.random()*6)+1;
    randomPlayer2 = Math.floor(Math.random()*6)+1;
}

function one(player){
    document.getElementById("player"+player).firstElementChild.firstElementChild.classList.add("invisible")

    document.getElementById("player"+player).firstElementChild.firstElementChild.nextElementSibling.firstElementChild.classList.add("invisible")

    document.getElementById("player"+player).firstElementChild.firstElementChild.nextElementSibling.lastElementChild.classList.add("invisible")

    document.getElementById("player"+player).firstElementChild.lastElementChild.classList.add("invisible")     
}

function two(player){
    document.getElementById("player"+player).firstElementChild.firstElementChild.classList.add("invisible")

    document.getElementById("player"+player).firstElementChild.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.classList.add("invisible")

    document.getElementById("player"+player).firstElementChild.lastElementChild.classList.add("invisible")
}

function three(player){
    document.getElementById("player"+player).firstElementChild.firstElementChild.classList.add("invisible")

    document.getElementById("player"+player).firstElementChild.lastElementChild.classList.add("invisible")

}

function four(player){
    document.getElementById("player"+player).firstElementChild.firstElementChild.firstElementChild.nextElementSibling.classList.add("invisible")

    document.getElementById("player"+player).firstElementChild.firstElementChild.nextElementSibling.classList.add("invisible")

    document.getElementById("player"+player).firstElementChild.lastElementChild.firstElementChild.nextElementSibling.classList.add("invisible")
}

function five(player){
    document.getElementById("player"+player).firstElementChild.firstElementChild.firstElementChild.nextElementSibling.classList.add("invisible")

    document.getElementById("player"+player).firstElementChild.firstElementChild.nextElementSibling.firstElementChild.classList.add("invisible")

    document.getElementById("player"+player).firstElementChild.firstElementChild.nextElementSibling.lastElementChild.classList.add("invisible")

    
    document.getElementById("player"+player).firstElementChild.lastElementChild.firstElementChild.nextElementSibling.classList.add("invisible")
}

function six(player){
    document.getElementById("player"+player).firstElementChild.firstElementChild.nextElementSibling.classList.add("invisible")
}


function compare(){
    if(randomPlayer1>randomPlayer2){
        document.getElementById("title").innerText = "Player 1 Wins!"

    }else if(randomPlayer2>randomPlayer1){
        document.getElementById("title").innerText = "Player 2 Wins!!"
    }else if(randomPlayer1 == randomPlayer2){
        document.getElementById("title").innerText= "Its a Draw!!!"
    }

}


function main(){
    
    document.getElementById("player1").firstElementChild.firstElementChild.nextElementSibling.classList.remove("invisible")
    document.getElementById("player2").firstElementChild.firstElementChild.nextElementSibling.classList.remove("invisible")
    randomGen()
    compare()
    if (randomPlayer1 == 1){
        one(1)
    }else if(randomPlayer1 == 2){
        two(1)
    }else if(randomPlayer1 == 3){
        three(1)
    }else if(randomPlayer1 == 4){
        four(1)
    }else if(randomPlayer1 == 5){
        five(1)
    }else if(randomPlayer1 == 6){
        six(1)
    }
    
    if (randomPlayer2 == 1){
        one(2)
    }else if(randomPlayer2 == 2){
        two(2)
    }else if(randomPlayer2 == 3){
        three(2)
    }else if(randomPlayer2 == 4){
        four(2)
    }else if(randomPlayer2 == 5){
        five(2)
    }else if(randomPlayer2 == 6){
        six(2)
    }
}