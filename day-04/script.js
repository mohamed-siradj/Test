let playerTurn = 'x';
const xClass = 'x-player';
const oClass = 'o-player'; 
let resetBtn = document.querySelector('.reset');
let cells = document.querySelectorAll('[box]');
const checkWin = [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [0, 4, 8],
 [2, 4, 6],
]; 

    let win = document.getElementsByTagName('p');
//check winner
function checkWinner() {
 for (let i = 0; i < checkWin.length; i++) {
   const [a, b, c] = checkWin[i];
   if (cells[a].className === cells[b].className && cells[b].className === cells[c].className && cells[a].className !== ''){
     console.log(`${cells[a].className} wins!`);
     alert(`${cells[a].className} wins!`);
   }
 }
}
// put mark Done T T
for (var i = 0; i < cells.length; i++) {
  
   cells[i].addEventListener('click', play);
   //.onclick = play;
   //.addEventListener('click', play, {once : true});
}
function play() { 
  
  if (playerTurn === 'x' && this.className === '') {
    
    this.classList.add(xClass);
    playerTurn = 'o';
  } else if (playerTurn === 'o' && this.className === '') {
    
    this.classList.add(oClass);
    playerTurn = 'x';
  }
  else if (this.className === xClass || oClass) {
    console.log('cant click again');
    return;
  }
  checkWinner();
}


// reset button
// i don't know how it work 
// but it work 
resetBtn.addEventListener('click',resetGame);
function resetGame() {
  
  for (var i = 0; i < cells.length; i++) {
    cells[i].classList.remove(xClass,oClass);
  }
  //arr = [25,12,10,20,30,60,70,50,8];
  playerTurn = 'x'
  console.log('game reset');
}