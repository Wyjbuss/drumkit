// detects UI button press
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
// detects keyboard press
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// create function that holds the switch statment that playes a sound.
function makeSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        case 'j':
            var crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case 'k':
            var kickDrum = new Audio('sounds/kick-bass.mp3')
            kickDrum.play();
            break;
        case 'l':
            var snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        default:
            console.log(key);
    }
}
// this isnt verry pretty because it passes in strings and concatonated strings
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    // ex: .k or .l to correspond to the index.html class to get the correct button

    //add a class to the button when it gets pressed
    activeButton.classList.add("pressed");

    //wait an amount of time
    setTimeout(function () {
        // remove the class so the the button wont have the "pressed" styles applied any more
        activeButton.classList.remove("pressed");
    }, 100);

}
