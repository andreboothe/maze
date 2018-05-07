var lost = false;


window.onload = function(){

	$("start").onclick = startGame;
	$("end").onmouseover = endGame;

    var boundaries = $$("div#maze div.boundary");

    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = crossedBoundary;
    }

};

function crossedBoundary(){

	lost = true;

    var boundaries = $$("div#maze div.boundary");

    for (var i = 0; i < boundaries.length; i++) {
         boundaries[i].addClassName("youlose");

    }

    $("status").textContent = "You Lose";
}

function startGame(){

	lost = false;

	var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++){
        boundaries[i].removeClassName("youlose");

    }
}

function endGame(){

	if(lost === false){
	  $("status").textContent = "You Win";
	}
	

}