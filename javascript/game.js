var cc = ['n', 'e', 'g', 'r', 'o', 'm'];
	var random = ['a', 'b', 'c', 'd', 'f', 'h', 'i', 'j', 'k', 'l', 'p', 'q', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var wins = 0;
	var losses = 0;
	var turnsleft = 3;
	var yourguesses = 0;

document.onkeyup = function(event){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var computerGuess = cc[Math.floor(Math.random() * cc.length)];

	if ((userGuess = 'n') || (userGuess = 'e') || (userGuess = 'g') || (userGuess = 'r') || (userGuess = 'o') || (userGuess = 'm')){
		if ((userGuess = 'n', 'e', 'g', 'r', 'o', 'm') &&  (cc = cc.length)){
			wins ++;
		}else if ((userGuess = random.length) && (cc = cc.length)){
			losses++;
		}else if ((userGuess = random.length) && (cc = cc.length)){
			turnsleft--;
		}else if ((userGuess = random.length) && (cc = cc.length)){
			yourguesses++;
		
	}
var html = 
		"<p>wins: " + 
		wins + 
		"</p>" +
		"<p>losses: " + 
		losses + 
		"</p>" +
		"<p>turnsleft: " + 
		turnsleft + 
		"</p>" +
		"<p>yourguesses: " +
		yourguesses +
		"</p>";

		document.querySelector('#game').innerHTML = html;
	}
}