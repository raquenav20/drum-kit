// Adding event listener to all drum buttons when detecting a button click 

var numberOfDrums = document.querySelectorAll(".drum").length


for (var i = 0; i<numberOfDrums ; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() { 
        
        var drumButton = this.innerHTML;
        
        makeSound(drumButton);
        buttonAnimation(drumButton);
       
    });
}

//Make sound when detecting the keyboard press

document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){

    switch (key) {       //Using Switch cases to add a different sounds to each button
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "l":           
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            alert("This won't make any sound! Try pressing another button :) ");
            break;
    }


}


function buttonAnimation(currentKey){
   var activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 300);
}
