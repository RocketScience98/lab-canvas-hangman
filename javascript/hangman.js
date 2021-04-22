class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord=this.pickWord();
    this.letters=[];
    this.guessedLetters='';
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    /*
    1. Tengo un arreglo
    2. de ese arreglo escojo una al azar
    3. 0 1 2 
    */
   return this.words[Math.floor(Math.random()*this.words.length)]
   console.log(Math.floor(Math.random()*this.words.length))
  }

  checkIfLetter(keyCode) {
    // ... your code goes here
    /*
    Keycode debe estar entre 65 y 90 = True
      */
     return 65<= keyCode && keyCode <= 90
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    //Necesito una funcion que vea si la palabra tiene esa letra
    return this.letters.indexOf(letter) === -1
    //{return true}
    //else {return false}
    }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft--;
    this.letters.push(letter)
  }

  checkGameOver() {
    // ... your code goes here
  return this.errorsLeft <= 0
  // {return true}
  //else {return false}
  }

  checkWinner() {
    // ... your code goes here
      /*for (let i of this.secretWord){i++;
      if (this.guessedLetters.indexOf(this.secretWord[i]) === -1){
      return true;}
      else {return false}}*/
      /*for(let letter of this.secretWord){
        return this.guessedLetters.indexOf(letter) != -1 ? true: false
      }
      */
      const secretArray= Array.from(this.secretWord)
      const guessedArray = Array.from(this.guessedLetters)

      let matches = 0;
      
      secretArray.forEach((letter) => {
        if(guessedArray.includes(letter)){
        matches++}
      })
      return matches === secretArray.length

}
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    //console.log(hangmanCanvas)
    hangmanCanvas.createBoard()
    //hangmanCanvas.drawHangman(hangman.errorsLeft)
    //hangmanCanvas.drawLines()
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  const keyCode =event.keyCode
  const key = event.key
  let ih = hangmanCanvas.secretWord.indexOf(key)
  let secretArray=Array.from(hangman.secretWord)
  let matrizUnica=[]
  console.log(ih)
  hangman.checkClickedLetters(keyCode)
   if (
    hangman.checkIfLetter(keyCode) &&
    hangman.checkClickedLetters(key) &&
    !hangman.guessedLetters.includes(key)){
      if (hangman.secretWord.includes(key)){        
        hangman.addCorrectLetter(key);
        for(let i=0;i<secretArray.length;i++){
          if(key == secretArray[i]){
            hangmanCanvas.writeCorrectLetter(i)
          }
        }
        ;
        if(hangman.checkWinner() === true){
          hangmanCanvas.winner();
          setTimeout(function(){alert (`You win!`)},500);
        }
      }
      else {
        hangman.addWrongLetter(key);
        hangmanCanvas.writeWrongLetter(key, hangman.errorsLeft);
        hangmanCanvas.drawHangman(hangman.errorsLeft);
        if(hangman.checkGameOver() === true){
          hangmanCanvas.gameOver();
          setTimeout(function(){alert (`Game over`);},500)         
        }
      }    
    }
    else {alert ('Already tried that letter')}
    
    
    
    
});
