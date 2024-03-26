
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;
$("body").on("keydown", function(){
    if (!started) {
        nextSequence();
        started = true;
    }
    
});

function nextSequence(){
    userClickedPattern = [];
    var ra= Math.floor(Math.random() * 4);
    $("#level-title").text("Level " + level++);
    var randomChosenColour = buttonColours[ra];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

};

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if (userClickedPattern.length == gamePattern.length){
            setTimeout(nextSequence, 1000);
        }

    }
    else{
        $("body").addClass("game-over")
        setTimeout(function(){
           $("body").removeClass("game-over")
        }, 200);
        playSound("wrong");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

$(".btn").on("click", function(){
    var userChosenColour  = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    console.log(userClickedPattern);
    console.log(gamePattern);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};

function animatePress(currentColour){
 $("#"+ currentColour).addClass("pressed")
 setTimeout(function(){
    $("#"+ currentColour).removeClass("pressed")
 }, 100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}