var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug= true;
  fixedRect.velocityY=-5;

  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug= true;
  movingRect.velocityY=+5;
}

function draw() {
  background(0,0,0); 
 
  if(movingRect.x - fixedRect.x< fixedRect.width/2+movingRect.width/2
    && fixedRect.x - movingRect.x< fixedRect.width/2+movingRect.width/2){
      movingRect.velocityX=movingRect.velocityX*(-1);
      movingRect.velocityY=movingRect.velocityY*(-1);
      //fixedRect.velocityX=fixedRect.velocityX*(-1);
     // fixedRect.velocityY=fixedRect.velocityY*(-1);
  }
  drawSprites();
}