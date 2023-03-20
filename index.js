var no_of_drums = document.querySelectorAll(".drum");
for(var i=0; i<no_of_drums.length; i++)
{
    //adding event listener for every buttons in screen clicking with mouse so inside for loop
    no_of_drums[i].addEventListener("click",function()
    {
        makeSound(this.innerHTML);  
        makeAnimations(this.innerHTML);      

    } );
}

//adding event listener for keyboard buttons in whole document
document.addEventListener("keydown",function(event) //can pass (event) as argument to function
{
    //"keydown" is new and to use
    //"keypress" is old and used in the video
    makeSound(event.key);   
    makeAnimations(event.key);    

} );

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick_bass=new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        default:
    }
}

function makeAnimations(key)
{
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function () 
    {
        activeButton.classList.remove("pressed");
    }, 100);
}