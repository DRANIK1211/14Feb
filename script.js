var but1 = document.querySelector(".yes");
var but2 = document.querySelector(".no");
var conteiner = document.querySelector(".conteiner");
var popup = document.querySelector(".popup");

var width = 70;
var height = 50;
var size = 45;
var click = 0

but1.onclick = () => {
	conteiner.style.display = "none";
	popup.style.display = "block";
}
but2.onclick = () => {
	if(click < 30){
		but1.style.width = width + "px";
		but1.style.height = height + "px";
		but1.style.fontSize = size + "px";
		width += 10;
		height += 10;
		size += 5;
	}else{
		but2.style.display = "none";
	} 
	click += 1;
}