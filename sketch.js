var bob, abdul;
function setup() {
  createCanvas(800,800);
  bob = createSprite(600,200,50,50);
  abdul = createSprite(400,200,50,50);
  bob.shapeColor = "red";
  abdul.shapeColor = "red";
}

function draw() {
  background(0);  
  bob.x = World.mouseX;
  bob.y = World.mouseY;
  if (abdul.x - bob.x < abdul.width/2 + bob.width/2 && bob.x - abdul.x < abdul.width/2 + bob.width/2 &&
    abdul.y - bob.y < abdul.height/2 + bob.height/2 && bob.y - abdul.y < abdul.height/2 + bob.height/2 ){
      bob.shapeColor = "purple";
      abdul.shapeColor = "green";
    } 
    else {
      bob.shapeColor = "red";
  abdul.shapeColor = "red";
    }
  drawSprites();
}
