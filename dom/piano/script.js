for(var i=0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        playSound(this.innerHTML);
        animation(this.innerHTML);
    })
    document.addEventListener("keydown",function(event){
    playSound(event.key);
    animation(event.key);
})

}

function animation(currEvent){
    let eventVar = document.querySelector("."+currEvent);
    eventVar.classList.add("animate");
    
    setTimeout(function(){
    eventVar.classList.remove("animate")
},100);
}



function playSound(key){
    switch (key) {
            case "a":
                let key01 = new Audio("audio/key01.mp3");
                key01.volume = 0.1;
                key01.play();
                break;
            case "s":
                let key03 = new Audio("audio/key03.mp3");
                key03.volume = 0.1;
                key03.play();
                break;
            case "d":
                let key05 = new Audio("audio/key05.mp3");
                key05.volume = 0.1;
                key05.play();
                break;
            case "f":
                let key07 = new Audio("audio/key07.mp3");
                key07.volume = 0.1;
                key07.play();
                break;
            case "g":
                let key09 = new Audio("audio/key09.mp3");
                key09.volume = 0.1;
                key09.play();
                break;
            case "h":
                let key11 = new Audio("audio/key11.mp3");
                key11.volume = 0.1;
                key11.play();
                break;
            case "j":
                let key13 = new Audio("audio/key13.mp3");
                key13.volume = 0.1;
                key13.play();
                break;
            case "k":
                let key15 = new Audio("audio/key15.mp3");
                key15.volume = 0.1;
                key15.play();
                break;
            case "l":
                let key17 = new Audio("audio/key17.mp3");
                key17.volume = 0.1;
                key17.play();
                break;                            
            default:
                break;
        }
}