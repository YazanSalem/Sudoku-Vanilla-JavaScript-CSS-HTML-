//Load boards manually
{
//set up boards
//first string will display the board while second is the solution
  const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];
  //Variables
  let timer;
  let timeRemaining;
  let lives;
  let selectedNum;
  let selectedTile;
  let disableSelect;

  window.addEventListener('DOMContentLoaded', function(){
    //Run start game when button is clicked
   let btn = getElement('.btn');
   btn.addEventListener('click', startGame);
  }); 

  function startGame(){
      //Choose difficulty
      let board;
      let easyDiff = getElement('#diff-1');
      let medDiff = getElement('#diff-2');
      let hardDiff= getElement('#diff-3');
      if(easyDiff.checked) board = easy[0];
      if(medDiff.checked) board = medium[0];
      if(hardDiff.checked) board = hard[0];
      //Set lives to 3 and enable selecting selecting numbers and tiles
      lives = 3;
      disableSelect = false;
      let livesDisplay = getElement("#lives");
      livesDisplay.textContent = "Lives Remaining : " + lives;
      //Display board based on difficulty
      generate(board);

  }
  function generate(board){
      //Clear previous boards
      clearPrev();
      //Let used to increment tile ids
      let idCount = 0;
      let boardLength = 81;
      //Creat 81 tiles
      for (let i = 0; i < boardLength; i++){
        //Creating paragraph element for tiles
        let tile = document.createElement('p');
         //check wether tile is blank or has a value
        if(board.charAt(i) == '-'){
            //set tile to number
            tile.textContent = board.charAt(i);
        }else{
            //click event
           
            }
      //Assign tile id
      tile.id = idCount;
      //Increment for next Tile
      idCount++;
      //add tile class to all tiles
      tile.classList.add("tile");

      if(tile.id > 17 && tile.id < 27) {
        tile.classList.add("bottomBorder");
      }
      else if(tile.id > 44 && tile.id < 54){
        tile.classList.add("bottomBorder");
      }
      else if ((tile.id + 1) % 9 === 3){
        tile.classList.add("rightBorder");
      }
      else if ((tile.id + 1) % 9 == 6){
        tile.classList.add("rightBorder");
      }

      //Add tiles to board
      getId("board").appendChild(tile);
      
    }
  }

  function clearPrev(){
    let tiles = getAllElements('.tile');
    //Remove each tile
    for(let i = 0; i < tiles.length; i++){
        tiles[i].remove();
    }

    //clear timer if it exists
    if(timer) clearTimeout(timer);
    //Deselect all numbers
    let container = getElement('#number-container');
    let containerLength = container.children.length;
    for(let i = 0; i <containerLength; i++ ){
        container.children[i].classList.remove('selected');
    }

    //Clear selected variables
    selectedTile = null;
    selectedNum = null;
  }
  //functions used to get elements
  function getElement(id){
    return document.querySelector(id);
  } 
  function getId(id){
    return document.getElementById(id);
  }

  function getAllElements(id){
    return document.querySelectorAll(id);
  }
}