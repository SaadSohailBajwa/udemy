for(var i=0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        let sound = new Audio("audio/key01.mp3");
        sound.play();
        }
    )

    

}
