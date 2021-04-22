class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord
  }
  createBoard() {
    // ... your code goes here
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height)
    this.drawLines()
  }
  drawLines() {
    // ... your code goes here
     for(let i=0; i < this.secretWord.length; i++ ){
       this.context.beginPath()
        this.context.moveTo(550+80*i,300)
        this.context.lineTo(620+80*i, 300)
        this.context.stroke()
       this.context.closePath()
     }
  }
  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.font = "80px Arial"
    this.context.fillText(this.secretWord[index],560 + 80 * index, 300 )
  }
  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    const wrLet = 10 - errorsLeft;

    if(!this.secretWord.includes(letter)){ 
      this.context.font = "100px Arial"
      this.context.fillText(letter.toUpperCase(), 500 + (wrLet * 80), 100)
      this.context.clearRect(500,300,100, 100)
      this.context.fillText(errorsLeft + " Errors" , 500, 400)
    }
  }
  drawHangman(errorsLeft) {
    console.log(errorsLeft);
    // ... your code goes here
    // PINTAR EL AHORCADO
    // Cada vez que yo me equivoco, se debe de pintar una línea.
    // Cada pintada depende del errorLeft
    switch(errorsLeft){
       case 9:
        this.context.beginPath()
          this.context.moveTo(50, 300)
          this.context.lineTo(150, 300)
          this.context.lineTo(100, 250)
          this.context.closePath()
          this.context.stroke();
          break;
      case 8:
        this.context.beginPath()
        this.context.moveTo(100,250)
        this.context.lineTo(100,0)
        this.context.closePath()
        this.context.stroke();
        break;
      case 7:
          this.context.beginPath()
          this.context.moveTo(100,0)
          this.context.lineTo(300,0)
          this.context.closePath()
          this.context.stroke()
        break;
      case 6:
          this.context.beginPath()
          this.context.moveTo(300,0)
          this.context.lineTo(300,50)
          this.context.closePath()
          this.context.stroke()
        break;
      case 5:
        this.context.beginPath()
        this.context.arc(300, 100,25, 0, Math.PI * 2)
        this.content.closePath()
        this.content.stroke()
        break;
      case 4:
        this.context.beginPath()
        this.context.moveTo(300,125)
        this.context.lineTo(300,200)
        this.context.closePath()
        this.context.stroke()
        break;
        case 3:
          this.context.beginPath()
          this.context.moveTo(300,125)
          this.context.lineTo(400,125)
          this.context.closePath()
          this.context.stroke()
          break;
          case 2:
            this.context.beginPath()
            this.context.moveTo(300,125)
            this.context.lineTo(200,125)
            this.context.closePath()
            this.context.stroke()
            break;
            case 1:
              this.context.beginPath()
              this.context.moveTo(300,200)
              this.context.lineTo(200,275)
              this.context.closePath()
              this.context.stroke()
              break;
              case 0:
                this.context.beginPath()
                this.context.moveTo(300,200)
                this.context.lineTo(400,275)
                this.context.closePath()
                this.context.stroke()
                break;
    }
  }
  gameOver() {
    // ... your code goes here
    this.context.clearRect(400,0,1000, 1000)
    this.context.font = "160px Arial"
    this.context.fillText("You are DEAD!", 400, 250)
    this.context.color = "red"
    
  }
  winner() {
    // ... your code goes here
    this.context.clearRect(400,0,1000, 150)
    this.context.font = "160px Arial"
    this.context.fillText("You win!", 400, 150)
    this.context.color = "green"
  }
}