$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:


let fungusHP = 100;
setInterval(replenish, 1000)
let attackAP = 100;

let arcaneScepter= {
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
	$(".arcane-scepter").on("click", arcaneScepterAttack);
	$(".entangle").on("click", entagleAttack );
	$(".dragon-blade").on("click", dragonBladeAttack );
	$(".star-fire").on("click", starFireAttack);

	// Make sure you check the index.html file!
	// There are lots of buttons and things ready for you to hook into here!

	// 🧠 Remember
	// - Handle events that ->
	// - Updates state which is ->
	// - Rendered to the DOM
}

function arcaneScepterAttack(){
    affectTheBars(arcaneScepter.apCost, arcaneScepter.hpDamage)
}

function entagleAttack(){
    affectTheBars(entagle.apCost, entagle.hpDamage);

}

function dragonBladeAttack(){
    affectTheBars(dragonBlade.apCost, dragonBlade.hpDamage);

}


function starFireAttack(){
    affectTheBars(starFire.apCost, starFire.hpDamage);

}

function affectTheBars(ap, hp){
    fungusHP-=hp
    attackAP-=ap

    if(fungusHP<0){
        fungusHP=0
        $('.walk').addClass('dead').removeClass('walk')

    }
    if (attackAP<0){
        attackAP = 0
        $(".walk").addClass("jump").removeClass("walk");
        $('.attack-btn').prop('disabled', true)

    }
    render()


}

function render(){
    $("#hp-meter").val((fungusHP));
	$(".hp-text").text(`${fungusHP} HP`);


    $("#ap-meter").val((attackAP));
    $(".ap-text").text(`${(attackAP)} AP`);

}

function replenish(){
    if (fungusHP < 50 && fungusHP !==0 ){
        fungusHP += 1
    }

    render()

}