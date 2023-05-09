$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let attackAP = 100;

let attacks = []

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

attacks.push(arcaneScepter, entagle, dragonBlade, starFire);



function onReady() {
    for (let attack of attacks){
        console.log(attack.name);

    }
    // $("body .attack-btn").on("click", attackAction);
    $("body .attack-btn arcane-scepter").on("click", attackAction);
    $("body .attack-btn entangle").on("click", attackAction);
    $("body .attack-btn dragon-blade").on("click", attackAction);
    $("body .attack-btn star-fire").on("click", attackAction);



    // Make sure you check the index.html file!
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function attackAction(){
    for (let attack of attacks){
        console.log(this);
        console.log(attack);
    }
    // $('body .ap-text').text(fungusHP-=this.hpDamage)
    // $('body .hp-text').text(attackAP-=this.apCost)

}
