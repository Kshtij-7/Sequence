const buttons = document.querySelectorAll('.card');
var current_player = 0;

buttons.forEach((button) => {
    const buttonimg = button.id.replace("Dup","");
    console.log(buttonimg);  
    button.style.setProperty('--button-image', `url('https://raw.githubusercontent.com/Kshtij-7/sequence/main/img/${buttonimg}.png')`);
});
function test() {
    window.open("https://youtube.com")
}
function randomizer() {
    const array = ["one", "two", "three", "four", "five"];

    // Shuffle the array
    array.sort(() => Math.random() - 0.5);

    console.log(array);
}
function coinadd(id){
    console.log(id);
    var card = document.getElementById(id);
    card.disabled = true;
    if(current_player == 0){    document.getElementById(id).classList.add('gcoin'); }
    if(current_player == 1){    document.getElementById(id).classList.add('bcoin'); }
    if(current_player == 2){    document.getElementById(id).classList.add('ocoin'); }
    current_player++
    if(current_player > 2) {current_player = 0;}
    
   //const button = document.getElementById(id);
    //button.classList.add('gcoin');
}
