var mySong;
var myImage;
var w;
var x1 = 25;
var y2 = 25;
var myColors = [
  '#FF0000',
  '#A90404',
  '#5D0707',
]

function preload(){

  mySong = loadSound('./assets/Godfather.mp3');
  myImage = loadImage('./assets/kum.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mySong.play();

  fft = new p5.FFT (0.7,512);
  w = width / 90;

}

function draw() {
  background('black');

  image(myImage, 0, 0, myImage.width, myImage.height);

  var spectrum = fft.analyze();

  for (var i = 0; i < 250; i++){
    var amp = spectrum[i];
    var y = map(amp,0,width,height,0);
  fill(23, 23, 23);
  strokeWeight(4);
  stroke('red');
  rect(i*w, y, w - 2, height - y);
  }

    if(mouseIsPressed == true){
      for (var x = 0; x < width; x += 60){
      for (var y = 0; y < height; y += 60){

      var x1 = random (30,100);
      var y1 = random (30,100);

      noStroke();
      fill(color(random(myColors)));
      ellipse(x,y,x1,y1);

      }
      }
  }

  textSize(25);
  textFont('Cambria');
  textStyle(BOLD)
  noStroke();
  fill('red');
  text('press the mouse to see blood', windowWidth/2 - 130, windowHeight/2 + 70);

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}
