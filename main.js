const buttons = document.querySelectorAll('.card');
var current_player = 0;

buttons.forEach((button) => {
    const buttonimg = button.id.replace("Dup","");
    //buttonimg = buttonimg.replace("pole1","polen");
    //buttonimg = buttonimg.replace("pole2","polen");
    //buttonimg = buttonimg.replace("pole3","polen");
    //buttonimg = buttonimg.replace("pole4","polen"); 
    console.log(buttonimg);  
    button.style.setProperty('--button-image', `url('/img/${buttonimg}.png')`);
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