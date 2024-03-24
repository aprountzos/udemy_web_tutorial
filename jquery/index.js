$("h1").css("color", "green");

$("h1").mouseover(function () {
    $("h1").css("color", "red");
});
$("h1").mouseout(function () {
    setTimeout(function(){
        $("h1").css("color", "green");
    },1000);
    
});

$("button").on("click",function () { 
    $("h1").slideUp({duration:1000}).slideDown().animate({opacity: 0.5});
});

$(selector);



