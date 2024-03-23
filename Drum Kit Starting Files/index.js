for (var i = 0; i<document.querySelectorAll(".drum").length; i++ ) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
                var el = this;
                var key = el.classList[0];
                var drum = "sounds/" + el.classList[2] +".mp3";
                var audioElement = new Audio(drum);
                audioElement.play();
                el.classList.add("pressed");
                setTimeout(function(){
                        el.classList.remove("pressed")
                },100);
                
                
        });
}
document.addEventListener("keypress", function (event){
        var key = event.key;
        var drum = document.querySelector("."+key);
        var drums = "sounds/" + drum.classList[2] +".mp3";
        var audioElement = new Audio(drums);
        audioElement.play();
        drum.classList.add("pressed");
        setTimeout(function(){
                drum.classList.remove("pressed")
        },100);
});
