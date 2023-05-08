$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
let fungusHP = 100;
let attackAP = 100;

let attacks = []
let attackObjects ={}

function onReady() {
    $("body .attack-btn arcane-scepter").on("click", );
    $("body .attack-btn entangle").on("click", );
    $("body .attack-btn dragon-blade").on("click", );
    $("body .attack-btn star-fire").on("click", );



    // Make sure you check the index.html file!
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function attackAction(){
    $('body .ap-text').text(fungusHP-attack.damage)
    $('body .hp-text').text(attackAP-attack.apCost)

}
