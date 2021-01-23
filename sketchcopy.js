let myImage
let mySong

function preload() {
  myImage = loadImage('flamingo.jpg')
  mySong = loadSound("Flamingoes.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(200)
  analyzer = new p5.Amplitude()
  analyzer.setInput(mySong)
  mySong.loop()

  imageMode(CENTER)
  image(myImage, width / 2, height / 2)
  myImage.filter(INVERT)

}

function draw() {


  for (let i = 0; i < 1; i++) {
    myDots();
  }

  function myDots() {
    let ampl = 0;
    ampl = analyzer.getLevel()

    ampl = map(ampl, 0, 1, 0, 150)

    push()
    var thisX = random(0, width)
    var thisY = random(0, height)
    var col = get(thisX, thisY)
    fill(col)
    noStroke(255)
    ellipse(thisX, thisY, ampl)
    pop()
  }

  let myText = 'pink flamingoes'
  let myText2 = 'click twice to start'

  push()
  textAlign(CENTER)
  textFont('Piazzolla')
  textStyle(BOLD)
  textSize(100)
  var textcolor = color('coral')
  textcolor.setAlpha(500 - millis())
  fill(textcolor)
  text(myText, width / 2, height / 2+120)
  pop()

  push()
  textAlign(CENTER)
  textFont('Piazzolla')
  textStyle(ITALIC)
  textSize(60)
  var textcolor = color('coral')
  textcolor.setAlpha(500 - millis())
  fill(textcolor)
  text(myText2, width / 2, height / 2+250)
  pop()


}

function mouseClicked() {
  createCanvas(windowWidth, windowHeight)
  background(200)
  imageMode(CENTER)
  image(myImage, width / 2, height / 2)
  myImage.filter(INVERT)

  if (mySong.isPlaying() == true) {
    mySong.stop()
    myImage.filter(INVERT)
  } else if (mySong.isPlaying() == false) {
    mySong.play()
  }

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
