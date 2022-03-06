for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        makesound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
document.addEventListener("keypress", function (event) {
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "j":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        default:
            console.log(buttoninnerhtml);
    }
}

function buttonAnimation(key) {
    var activebutton = document.querySelector("." + key);
    activebutton.classList.add("pressed");
    setTimeout(function () {
        activebutton.classList.remove("pressed");
    }, 100);
}