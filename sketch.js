var fixedRect,movingRect


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 100);
  fixedRect.shapeColor="cyan"
  fixedRect.debug = true;

  movingRect = createSprite(200, 200, 100, 50);
  movingRect.shapeColor="yellow"
  movingRect.debug = true;
  }

function draw() {
  background(255,255,255); 
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.x-fixedRect.x>-(movingRect.width/2+fixedRect.width/2)&&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    movingRect.y-fixedRect.y>-(movingRect.height/2+fixedRect.height/2)){
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"  
  }
  else{ 
    fixedRect.shapeColor="cyan"
  movingRect.shapeColor="yellow"  


  }

  drawSprites();
}