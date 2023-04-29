for(var i=0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        
        switch (this.innerHTML) {
            case "A":
                let key01 = new Audio("audio/key01.mp3");
                key01.play();
                break;
            case "S":
                let key03 = new Audio("audio/key03.mp3");
                key03.play();
                break;
            case "D":
                let key05 = new Audio("audio/key05.mp3");
                key05.play();
                break;
            case "F":
                let key07 = new Audio("audio/key07.mp3");
                key07.play();
                break;
            case "G":
                let key09 = new Audio("audio/key09.mp3");
                key09.play();
                break;
            case "H":
                let key11 = new Audio("audio/key11.mp3");
                key11.play();
                break;
            case "J":
                let key13 = new Audio("audio/key13.mp3");
                key13.play();
                break;
            case "K":
                let key15 = new Audio("audio/key15.mp3");
                key15.play();
                break;
            case "L":
                let key17 = new Audio("audio/key17.mp3");
                key17.play();
                break;                            
            default:
                break;
        }
    })
}
