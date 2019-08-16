function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(600, 200, 70, 30)
  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
}

function draw() {
  background(0,0,0);  
 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
 
 if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2 &&
   fixedrect.x-movingrect.x <fixedrect.width/2+movingrect.width/2 &&
   movingrect.y-fixedrect.y < fixedrect.height/2+movingrect.height/2 &&
   fixedrect.y-movingrect.y <fixedrect.height/2+movingrect.height/2){
    fixedrect.shapeColor="pink";
  movingrect.shapeColor="pink";
 }
 else{
  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";
 }
 
 
 
 
 
 
 
 
  drawSprites();
}