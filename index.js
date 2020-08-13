var v =document.querySelectorAll(".drum")
for(var i = 0; i<v.length;i++){
document.querySelectorAll("button")[i].addEventListener("click", function (){
var txt = this.innerHTML;
soundd(txt);
});
}
document.addEventListener("keydown",function (){
  soundd(event.key)
})
function soundd(txt){
  switch (txt) {
    case "w": var audio1 = new Audio("sounds/tom-1.mp3");
              audio1.play();
              break;
      case "a": var audio2 = new Audio("sounds/tom-2.mp3");
                audio2.play();
                break;
      case "s": var audio3 = new Audio("sounds/tom-3.mp3");
                audio3.play();
                break;
      case "d": var audio4 = new Audio("sounds/tom-4.mp3");
                audio4.play();
                break;
      case "j": var audio4 = new Audio("sounds/snare.mp3");
                audio4.play();
                break;
      case "k": var audio4 = new Audio("sounds/kick-bass.mp3");
                audio4.play();
                break;
      case "l": var audio4 = new Audio("sounds/crash.mp3");
                audio4.play();
                break;
    default:    console.log("oops");

  }
}
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
