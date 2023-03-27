
let cont = document.getElementById("count")
let saveEl = document.getElementById("prev")
let totalEl = document.getElementById("total")
let tempEl = totalEl.textContent

console.log(cont)

let counter = 0;
let totalNum = 0;

function increment(){
    counter += 1
    console.log("button was clicked",counter,"times")
    cont.innerText = counter
    
}


function save(){

    saveEl.textContent += counter + " - "
    totalNum += counter
    counter = 0
    cont.textContent = 0 
}

function total(){
    
    totalEl.textContent = tempEl
    totalEl.textContent += totalNum
    
    
    
}

