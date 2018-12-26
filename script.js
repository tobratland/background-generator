var css = document.querySelector("H3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("Gradient");
var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
var newColor = "#";

window.onload = setGradient(); //to make gradientcolor and gradienttext show up on load

//function for setting color and text
function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



function makeRandomColor1() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  color1.value = color;
}
function makeRandomColor2() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  color2.value = color;
}