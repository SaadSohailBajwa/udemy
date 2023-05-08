

let levels = []
let playerLevel = []
let globalCounter = 0
let pointer = 0
let currentLevel = 1


console.log(levels)

    
console.log(document.querySelector(".b-1").classList)    


function assignEventListener(x){
    
    $(".b-"+x).on("click",function(){
    
        $(".b-"+x).addClass("border-click");
    
        setTimeout(function(){
            $(".b-"+x).removeClass("border-click")
            },200);

    

        console.log(x+" got clicked")    
        playerLevel.push(x)
        if(gameLogic(x) === 1){
            
            nextLevelHint();
            currentLevel++
            $("h1").text("round "+currentLevel);
        }else if(gameLogic(x) === 2){
            $("h1").text("you lose");
        }
    
    console.log("player levels are: ")    
    console.log(playerLevel);
    console.log("levels are:")
    console.log(levels)

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
    // returns TRUE if last element of both arrays are same 
    // else returns FALSE 
    if(playerLevel[playerLevel.length-1] == levels[levels.length-1]){
        console.log(playerLevel[playerLevel.length-1])
        console.log(levels[levels.length-1])
        return true;
    }else{
        return false;
    }
}

function gameLogic(box){

    // this function is not behaving properly, has something to do with return problem 

    console.log("box is "+box)
    console.log(levels[pointer])
    console.log("pointer is "+ pointer)
    

    if(box == levels[pointer]){
        if(pointer < (levels.length-1)){
            pointer++;
            return 0
        }else if(pointer == (levels.length-1)){
            pointer = 0;
            return 1
        }
        
    }else if(box != levels[pointer]){
        pointer = 0;
        return 2
    }

}

function nextLevelHint(){

    // gives hint of next by adding class to the equalent last index of array
    levels.push(randomGen())
    setTimeout(function(){
        $(".b-"+levels[levels.length-1]).addClass("border-next")
    },2000);
    setTimeout(function(){
        $(".b-"+levels[levels.length-1]).removeClass("border-next")
    },2500);

}

nextLevelHint()





