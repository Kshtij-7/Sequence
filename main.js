const buttons = document.querySelectorAll('.card');
var current_player = 0;
var GreenCoin = 0;
var BlueCoin = 0;
var OrangeCoin = 0;
var GreenCards=[];
var BlueCards=[];
var OrangeCards=[];

buttons.forEach((button) => {
    var buttonimg = button.id.replace("O","");
    buttonimg = buttonimg.replace("D","");
    console.log(buttonimg);  
    button.style.setProperty('--button-image', `url('https://raw.githubusercontent.com/Kshtij-7/sequence/main/img/${buttonimg}.png')`);
});
function reloadTextures(){
  buttons.forEach((button) => {
    var buttonimg = button.id.replace("O","");
    buttonimg = buttonimg.replace("D","");
    console.log(buttonimg);  
    button.style.setProperty('--button-image', `url('https://raw.githubusercontent.com/Kshtij-7/sequence/main/img/${buttonimg}.png')`);
});
}
function test() {
    window.open("https://youtube.com")
}
function randomizeDeck() {
  sessionStorage.setItem("color","Green")
    var CardsDeck = ["1bs", "2bs", "3bs", "4bs", "5bs", "6bs", "7bs", "8bs", "9bs", "Jbs", "Qbs", "Kbs", "Abs", "1bc", "2bc", "3bc", "4bc", "5bc", "6bc", "7bc", "8bc", "9bc", "Jbc", "Qbc", "Kbc", "Abc","1rh", "2rh", "3rh", "4rh", "5rh", "6rh", "7rh", "8rh", "9rh", "Jrh", "Qrh", "Krh", "Arh", "1rd", "2rd", "3rd", "4rd", "5rd", "6rd", "7rd", "8rd", "9rd", "Jrd", "Qrd", "Krd", "Ard","1bs", "2bs", "3bs", "4bs", "5bs", "6bs", "7bs", "8bs", "9bs", "Jbs", "Qbs", "Kbs", "Abs", "1bc", "2bc", "3bc", "4bc", "5bc", "6bc", "7bc", "8bc", "9bc", "Jbc", "Qbc", "Kbc", "Abc","1rh", "2rh", "3rh", "4rh", "5rh", "6rh", "7rh", "8rh", "9rh", "Jrh", "Qrh", "Krh", "Arh", "1rd", "2rd", "3rd", "4rd", "5rd", "6rd", "7rd", "8rd", "9rd", "Jrd", "Qrd", "Krd", "Ard"];

    // Shuffle the array
    CardsDeck.sort(() => Math.random() - 0.5);
    console.log(CardsDeck);
    /*for(i=0;i<7;i++){
      console.log(`card${i}`+ document.getElementById(`card${i}`).innerHTML);
      GreenCards.push(CardsDeck.shift());
      BlueCards.push(CardsDeck.shift());
      OrangeCards.push(CardsDeck.shift());      
      document.getElementById(`card${i}`).setAttribute("id", `card${i} ${GreenCards[i]}`);
      console.log("hrhfui"+document.getElementById(`card${i}`).id)
    }*/
    for (let i = 0; i < 7; i++) {
      var currentCard = document.getElementById(`card${i}`);
      console.log(`card${i}:`);
      
      GreenCards.push(CardsDeck.shift());
      BlueCards.push(CardsDeck.shift());
      OrangeCards.push(CardsDeck.shift());
      
      const newId = `${GreenCards[i]}`;
      currentCard.setAttribute("id", newId);
      currentCard.setAttribute("data-card", newId);
      console.log(`Updated ID for card${i}: ${currentCard.id}`);
    }
    

    console.log(CardsDeck + "\n" + GreenCards + "\n" + BlueCards + "\n" + OrangeCards );
}
function coinadd(id){
    console.log(id);
    var card = document.getElementById(id);
    card.disabled = true;
    if(current_player == 0){    card.classList.add('GreenCoin'); card.innerText = "GreenCoin"; checkWinningCondition("GreenCoin");}
    if(current_player == 1){    card.classList.add('BlueCoin'); card.innerText = "BlueCoin"; checkWinningCondition("BlueCoin");}
    if(current_player == 2){    card.classList.add('OrangeCoin'); card.innerText = "OrangeCoin"; checkWinningCondition("OrangeCoin");}
    current_player++
    if(current_player > 2) {current_player = 0;}
    
   //const button = document.getElementById(id);
    //button.classList.add('gcoin');
}
function getGameBoardData() {
    var gameBoard = [];
    var table = document.getElementById('gameBoard');
    var rows = table.getElementsByTagName('tr');
  
    // Iterate through each row
    for (var i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName('td');
      var row = [];
  
      // Iterate through each cell in the row
      for (var j = 0; j < cells.length; j++) {
        // Get the data from the cell (e.g., coin color, identifier, etc.)
        var cellData = cells[j].innerText; // You can modify this to extract the desired data from the cell
  
        // Push the cell data to the row array
        row.push(cellData);
      }
  
      // Push the row to the game board array
      gameBoard.push(row);
    }
  
    console.log(gameBoard);
    return gameBoard;   
}
function getGameBoardDataID() {
  var gameBoardID = [];
  var table = document.getElementById('gameBoard');
  var rows = table.getElementsByTagName('tr');

  // Iterate through each row
  for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName('td');
    var row = [];

    // Iterate through each cell in the row
    for (var j = 0; j < cells.length; j++) {
      // Get the data from the cell (e.g., coin color, identifier, etc.)
      var cellData = cells[j].innerHTML.slice(12,16); // You can modify this to extract the desired data from the cell  
      // Push the cell data to the row array
      row.push(cellData);
    }

    // Push the row to the game board array
    gameBoardID.push(row);
  }

  console.log(gameBoardID);
  return gameBoardID;   
}
function checkWinningCondition(player) {
  const board = getGameBoardData();
  const board2 = getGameBoardDataID();
    const rowCount = board.length;
    const colCount = board[0].length;
    var sequence = [];
    // Check horizontal lines
    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col <= colCount - 5; col++) {
        let consecutiveCount = 0;
        for (let i = 0; i < 5; i++) {
          if (board[row][col + i] === player) {
            consecutiveCount++;
            sequence.push(board2[row][col + i]);
          }
          else{
            sequence.length = 0; 
          }
        }
        if (consecutiveCount === 5) {
          // Winning condition detected horizontally
          if(player=="GreenCoin"){GreenCoin++;}
          if(player=="BlueCoin"){BlueCoin++;}
          if(player=="OrangeCoin"){OrangeCoin++;}
          
          for(i=0;i<sequence.length;i++){
            document.getElementById(sequence[i]).classList.add(`${player}Sequence`);
            document.getElementById(sequence[i]).classList.remove(`${player}`);
            document.getElementById(sequence[i]).innerText = `${player}Sequence`;
          }
          if(GreenCoin==3 || BlueCoin==3 || OrangeCoin==3){window.alert(player + " Won the game \n" + sequence);}          
          return true;
        }
      }
    }
  
    // Check vertical lines
    for (let col = 0; col < colCount; col++) {
      for (let row = 0; row <= rowCount - 5; row++) {
        let consecutiveCount = 0;
        for (let i = 0; i < 5; i++) {
          if (board[row + i][col] === player) {
            consecutiveCount++;
            sequence.push(board2[row+1][col]);
          }
          else{
            sequence.length = 0; 
          }
        }
        if (consecutiveCount === 5) {
          // Winning condition detected vertically
          if(player=="GreenCoin"){GreenCoin++;}
          if(player=="BlueCoin"){BlueCoin++;}
          if(player=="OrangeCoin"){OrangeCoin++;}
          
          for(i=0;i<sequence.length;i++){
            document.getElementById(sequence[i]).classList.add(`${player}Sequence`);
            document.getElementById(sequence[i]).classList.remove(`${player}`);
            document.getElementById(sequence[i]).innerText = `${player}Sequence`;
          }
          if(GreenCoin==3 || BlueCoin==3 || OrangeCoin==3){window.alert(player + " Won the game \n" + sequence);}          
          return true;
        }
      }
    }
  
    // Check diagonal lines (top-left to bottom-right)
    for (let row = 0; row <= rowCount - 5; row++) {
      for (let col = 0; col <= colCount - 5; col++) {
        let consecutiveCount = 0;
        for (let i = 0; i < 5; i++) {
          if (board[row + i][col + i] === player) {
            consecutiveCount++;
            sequence.push(board2[row + i][col + i]);
          }
          else{
            sequence.length = 0; 
          }
        }
        if (consecutiveCount === 5) {
          // Winning condition detected diagonally (top-left to bottom-right)
          if(player=="GreenCoin"){GreenCoin++;}
          if(player=="BlueCoin"){BlueCoin++;}
          if(player=="OrangeCoin"){OrangeCoin++;}
          
          for(i=0;i<sequence.length;i++){
            document.getElementById(sequence[i]).classList.add(`${player}Sequence`);
            document.getElementById(sequence[i]).classList.remove(`${player}`);
            document.getElementById(sequence[i]).innerText = `${player}Sequence`;
          }
          if(GreenCoin==3 || BlueCoin==3 || OrangeCoin==3){window.alert(player + " Won the game \n" + sequence);}          
          return true;
        }
      }
    }
  
    // Check diagonal lines (top-right to bottom-left)
    for (let row = 0; row <= rowCount - 5; row++) {
      for (let col = 4; col < colCount; col++) {
        let consecutiveCount = 0;
        for (let i = 0; i < 5; i++) {
          if (board[row + i][col - i] === player) {
            consecutiveCount++;
            sequence.push(board2[row + i][col - i]);
          }
          else{
            sequence.length = 0; 
          }
        }
        if (consecutiveCount === 5) {
          // Winning condition detected diagonally (top-right to bottom-left)
          if(player=="GreenCoin"){GreenCoin++;}
          if(player=="BlueCoin"){BlueCoin++;}
          if(player=="OrangeCoin"){OrangeCoin++;}
          
          for(i=0;i<sequence.length;i++){
            document.getElementById(sequence[i]).classList.add(`${player}Sequence`);
            document.getElementById(sequence[i]).classList.remove(`${player}`);
            document.getElementById(sequence[i]).innerText = `${player}Sequence`;
          }
          if(GreenCoin==3 || BlueCoin==3 || OrangeCoin==3){window.alert(player + " Won the game \n" + sequence);}          
          return true;
        }
      }
    }
  
    // No winning condition detected
    return false;
}
function selectCard(card) {
  // Get the selected card's color from its dataset attribute
  const selectedColor = card;
  console.log(selectedColor)
  // Check if there's a matching card on the board with the same color
  const matchingCard = document.querySelector(`#gameBoard .card[id="${selectedColor + "O" || selectedColor + "D"  }"]`)/* || document.querySelector(`#gameBoard .card[id="${selectedColor}D"]`)*/;
  
  if (matchingCard) {
    // Perform actions when a matching card is found
    console.log("Matching card found on the board:", matchingCard.id);
    
    // Add a CSS class to highlight the matching cards
   // card.classList.add("highlight");
    //matchingCard.classList.add("highlight");
    matchingCard.disabled = false;
    matchingCard.classList.add("highlight")
    
    // Add your logic here to handle the matching card condition
    // For example, you can update game state, remove cards, award points, etc.
  } else {
    // No matching card found on the board
    console.log("No matching card found on the board");
    
    // Add your logic here for when a matching card is not found
    // For example, you can display an error message, disable further actions, etc.
  }
}
