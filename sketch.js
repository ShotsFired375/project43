var hr, mn, sc, hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(425,400);
  angleMode(DEGREES);
}

function draw() {
  background("lightgrey");
    
  translate(200,200);
  rotate(-90);

  hr=hour();
  mn=minute();
  sc=second();

  hrAngle=map(hr%12,0,12,0,360);
  mnAngle=map(mn,0,60,0,360);
  scAngle=map(sc,0,60,0,360);

  push();
  rotate(scAngle);
  stroke("white");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push()
  rotate(mnAngle)
  stroke(43, 128, 255)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push();
  rotate(hrAngle);
  stroke(4, 0, 255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke("lightgrey");
  point(0,0);
  strokeWeight(10);
  noFill();

  stroke("white");
  arc(0,0,300,300,0,scAngle);

  stroke(43, 128, 255);
  arc(0,0,280,280,0,mnAngle);

  stroke(4, 0, 255);
  arc(0,0,260,260,0,hrAngle);
  drawSprites();
}