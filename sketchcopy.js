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

   myImage.filter(INVERT)



  let amp = 0;
  amp = analyzer.getLevel()

  amp = map(amp, 0, 1, 0, 100)

  push()
  var thisX = random(0, width)
  var thisY = random(0, height)
  var col = get(thisX, thisY)
  fill(col)
  noStroke(255)
  ellipse(thisX, thisY, amp)
  pop()

  let myText = 'pink flamingoes'

  fill('coral')
  textFont('Piazzolla')
  textStyle(BOLD)
  textSize(100)
  textAlign(CENTER)
  text(myText, width / 2, height / 2)


}

function mouseClicked() {
  createCanvas(windowWidth, windowHeight)
  background(200)
  imageMode(CENTER)
  image(myImage, width / 2, height / 2)

  if (mySong.isPlaying() == true) {
    mySong.stop()
       myImage.filter(INVERT)
  } else if (mySong.isPlaying() == false){
    mySong.play()
       myImage.filter(NONE)
  }

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
