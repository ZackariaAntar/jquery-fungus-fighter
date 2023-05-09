$(document).ready(onReady);

let fungusHP = 100; // establishing fungusHP global variable to use for both text and progress bar values
setInterval(replenish, 1000); // calling setInterval global variable and passing the replenish() logic and update parameters.
let attackAP = 100; //// establishing attackAP global variable to use for both text and progress bar values

let arcaneScepter = {
	// creating objects for the different attacks using their respective ap and hp as values for their properties.
	apCost: 12,
	hpDamage: 14,
};

let entagle = {
	apCost: 23,
	hpDamage: 9,
};

let dragonBlade = {
	apCost: 38,
	hpDamage: 47,
};

let starFire = {
	apCost: 33,
	hpDamage: 25,
};

function onReady() {
	// registering event handlers to run specific events on click.
	$(".arcane-scepter").on("click", arcaneScepterAttack);
	$(".entangle").on("click", entagleAttack);
	$(".dragon-blade").on("click", dragonBladeAttack);
	$(".star-fire").on("click", starFireAttack);
}

function arcaneScepterAttack() {
	//when the .arcane-scepter button is clicked pass the ap and hp values into the affectTheAnimations function.
	affectTheAnimations(arcaneScepter.apCost, arcaneScepter.hpDamage);
}

function entagleAttack() {
	affectTheAnimations(entagle.apCost, entagle.hpDamage);
}

function dragonBladeAttack() {
	affectTheAnimations(dragonBlade.apCost, dragonBlade.hpDamage);
}
function starFireAttack() {
	affectTheAnimations(starFire.apCost, starFire.hpDamage);
}

function affectTheAnimations(ap, hp) {
	// subtract the respective ap and hp values from the global variables to trigger a change in animation.
	fungusHP -= hp;
	attackAP -= ap;

	if (fungusHP < 0) {
		// if fungusHP is less than 0 set it to 0 and change animation to dead
		fungusHP = 0;
		$(".walk").addClass("dead").removeClass("walk");
	}
	if (attackAP < 0) {
		// if attackAP is less than 0 set it to 0, change animation to jump, and disable the buttons.
		attackAP = 0;
		$(".walk").addClass("jump").removeClass("walk");
		$(".attack-btn").prop("disabled", true);
	}
	render(); // calling the render function.
}

function render() {
	// changing the text and progress bars on the DOM to reflect the change in fungusHP and attackAP from the affectTheAnimations function above.
	$("#hp-meter").val(fungusHP);
	$(".hp-text").text(`${fungusHP} HP`);
	$("#ap-meter").val(attackAP);
	$(".ap-text").text(`${attackAP} AP`);
}

function replenish() {
	// logic for increasing the progress bar in the setInterval global function. Strict inequality prevents the progress bar from increasing when at 0.
	if (fungusHP < 50 && fungusHP !== 0) {
		fungusHP += 1;
	}

	render(); // call the render function to update the progress bar on the DOM.
}
