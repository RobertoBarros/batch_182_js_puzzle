const hintButton = document.getElementById('show-hint');

hintButton.addEventListener('click', () => {
  document.querySelector('.hint').classList.toggle('active');
});

tiles = document.querySelectorAll('#grid td');

function canMove(tile) {
  const tileCol = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const empty = document.querySelector('.empty');
  const emptyCol = empty.cellIndex;
  const emptyRow = empty.parentElement.rowIndex;
  // console.log(`tileCol:${tileCol} tileRow:${tileRow}`)
  // console.log(`emptyCol:${emptyCol} emptyRow:${emptyRow}`)

  return (tileCol === emptyCol && tileRow === emptyRow - 1) ||
         (tileCol === emptyCol && tileRow === emptyRow + 1) ||
         (tileRow === emptyRow && tileCol === emptyCol - 1) ||
         (tileRow === emptyRow && tileCol === emptyCol + 1)
}

function moveTile(tile) {
  const empty = document.querySelector('.empty');
  empty.classList.remove('empty');
  tile.classList.add('empty');

  empty.innerText = tile.innerText;
  tile.innerText = '';
}

function checkWin() {
  tds = Array.from(document.querySelectorAll('#grid td')).map(td => td.innerText).join('');
  if (tds === "123456789101112131415") {
    alert('YOU WIN!!!');
  }
}

tiles.forEach((tile) => {
  tile.addEventListener('click', (event)=>{
    if (canMove(tile)) {
      // console.log('Move!!!!');
      moveTile(tile);
      checkWin();
    } else {
      // console.log("Don't move");
    };
  });
});