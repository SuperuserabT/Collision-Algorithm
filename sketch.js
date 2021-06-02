
var fixedRect, movingRect;
var gameObject1, gameObject2;
var Spiral

function setup() {
  createCanvas(1200,800);
 
  Spiral = createSprite(100, 300, 20, 40);
  Spiral.shapeColor = "yellow";
 
  movingRect = createSprite(800, 400, 80, 30);
  movingRect.shapeColor = "green";
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, Spiral)){
    movingRect.shapeColor = "blue";
    Spiral.shapeColor = "red";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    Spiral.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




