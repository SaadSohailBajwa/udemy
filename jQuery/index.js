
$("h1").css("backgroundColor","red");

$(document).keydown(function(event){
    console.log(event.key);
    $("h1").text(event.key);
    
});

$("button").on("click",function(){
    $("h1").after("<div>a button got clicked</div>")
})