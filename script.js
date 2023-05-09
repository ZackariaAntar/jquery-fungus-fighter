$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let attackAP = 100;

let arcaneScepter= {
    name: 'Arcane Scepter',
    apCost: 12,
    hpDamage: 14,
};

let entagle = {
    name: 'Entangle',
	apCost: 23,
	hpDamage: 9,
};

let dragonBlade = {
    name: 'Dragon Blade',
	apCost: 38,
	hpDamage: 47,
};

let starFire = {
    name: 'Star Fire',
    apCost: 33,
    hpDamage: 25,
};



function onReady() {
	$(".arcane-scepter").on("click", arcaneScepterAttack);
	$(".entangle").on("click", entagleAttack );
	$(".dragon-blade").on("click", dragonBladeAttack );
	$(" .star-fire").on("click", starFireAttack);

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
    if ($('#hp-meter').val()>0){
        $("#hp-meter").val((fungusHP -= hp));
    } else $("#hp-meter").val(0);

    if ($("#ap-meter").val()>0){
        $("#ap-meter").val((attackAP -= ap));
    }
    if ($("#ap-meter").val() < 0 ){
        $('#ap-meter').val(0)
        
    };

}
