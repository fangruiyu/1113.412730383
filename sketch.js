var sound1 
function preload(){
  sound1 = loadSound("mixkit-island-beat-250.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)  
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}
r= 100
i= 10
var fc 
function draw() {
  background(0)
  noFill(0)
  rectMode(CENTER)
  if(sound1.isPlaying())
  {
    fc = map(analyzer.getLevel(),0,1,0,100)
  }
  else{
    fc = map(mouseX,0,width,0,100)
  }
  for( x=50;x<width;x=x+r){
    for( y=50;y<height;y=y+r){
      stroke("#FFE500")
      rect(x,y,r+fc)
    }
  }
  for( x=50;x<width;x=x+r){
    for( y=50;y<height;y=y+r){
      stroke("#F75000")
      arc(x, y, r+fc,r+fc, radians(0), radians(90))
      arc(x, y, r+fc,r+fc, radians(180), radians(270))
      arc(x, y, (r-1*i)+fc,(r-1*i)+fc, radians(0), radians(90))
      arc(x, y, (r-1*i)+fc,(r-1*i)+fc, radians(180), radians(270))
      arc(x, y, (r-2*i)+fc,(r-2*i)+fc, radians(0), radians(90))
      arc(x, y, (r-2*i)+fc,(r-2*i)+fc, radians(180), radians(270))
      arc(x, y, (r-3*i)+fc,(r-3*i)+fc, radians(0), radians(90))
      arc(x, y, (r-3*i)+fc,(r-3*i)+fc, radians(180), radians(270))
      arc(x, y, (r-4*i)+fc,(r-4*i)+fc, radians(0), radians(90))
      arc(x, y, (r-4*i)+fc,(r-4*i)+fc, radians(180), radians(270))
      arc(x, y, (r-5*i)+fc,(r-5*i)+fc, radians(0), radians(90))     
      arc(x, y, (r-5*i)+fc,(r-5*i)+fc, radians(180), radians(270))
      arc(x, y, (r-6*i)+fc,(r-6*i)+fc, radians(0), radians(90))
      arc(x, y, (r-6*i)+fc,(r-6*i)+fc, radians(180), radians(270))
      arc(x, y, (r-7*i)+fc,(r-7*i)+fc, radians(0), radians(90))
      arc(x, y, (r-7*i)+fc,(r-7*i)+fc, radians(180), radians(270))
      arc(x, y, (r-8*i)+fc,(r-8*i)+fc, radians(0), radians(90))
      arc(x, y, (r-8*i)+fc,(r-8*i)+fc, radians(180), radians(270))
      arc(x, y, (r-9*i)+fc,(r-9*i)+fc, radians(0), radians(90))
      arc(x, y, (r-9*i)+fc,(r-9*i)+fc, radians(180), radians(270))
   
    }
  }
  for( x=100;x<width;x=x+r){
    for( y=100;y<height;y=y+r){
      stroke("#0000FF")
      ellipse(x,y,40+fc)
    }
  } 
}

function mousePressed(){
  if(sound1.isPlaying()){
  sound1.stop();
  }else{
  sound1.play();
  }
}