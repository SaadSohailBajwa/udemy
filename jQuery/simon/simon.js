let levels = []
let playerLevel = []
let globalCounter = 0


console.log(levels)

    
console.log(document.querySelector(".b-1").classList)    


function assignEventListener(x){
    $(".b-"+x).on("click",function(){
    
    $(".b-"+x).addClass("border-click");
    setTimeout(function(){
        $(".b-"+x).removeClass("border-click")
    },200);

    


    playerLevel.push(x)
    if(playerLogic() == true){
        levels.push(randomGen());
        $("h1").text("you win");
    }else{
        $("h1").text("you lose");
    }
    console.log(playerLevel);
});
}

for(let i=1;i<5;i++){
    assignEventListener(i)
}





function randomGen(){
    let nextLevel = Math.floor(Math.random()*4) + 1;
    return nextLevel
}



function playerLogic(){

    if(playerLevel[playerLevel.length-1] == levels[playerLevel.length-1]){
        return true;
    }else{
        return false;
    }
}

function nextLevelHint(){

    levels.push(randomGen())
    setTimeout(function(){
        $(".b-"+levels[levels.length-1]).addClass("border-next")
    },2000);
    setTimeout(function(){
        $(".b-"+levels[levels.length-1]).removeClass("border-next")
    },2500);

}

nextLevelHint()





