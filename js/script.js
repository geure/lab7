function init(){

var input = document.getElementById('entryinput');
var button = document.getElementById('entrybutton');
var name = "Greg Eure";
var output = document.getElementById('textoutput');

function myAlertFunction(){
	alert(name + ': ' + input.value);
}

function myOutputFunction(){
	output.innerHTML = input.value;
}

button.addEventListener('click', myAlertFunction);
button.addEventListener('click', myOutputFunction);
}

window.addEventListener('load', init);