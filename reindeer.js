var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = " ";
for (i = 0; i < colors.length; i++){
	console.log(colors[i] + " " + reindeer[i]);
	document.getElementById("coloredReindeer").innerHTML += colors[i] + " " + reindeer[i] +"<br>";
}




