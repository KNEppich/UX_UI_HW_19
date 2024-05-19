console.log ("Test");
console.log (document);
console.log (document.getElementById("digital"))


var digitalNav = document.getElementById("Digital");

var printNav = document.getElementById("Print")

var digital = document.querySelector("#digital2")

var scroll = function (){
   console.log("scrolling") 
   digital.scrollIntoView({ behavior: 'smooth' });
}

digitalNav.addEventListener("click", scroll)
printNav.addEventListener("click", scroll)