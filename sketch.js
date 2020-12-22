 var bullet,wall;
 var thickness,speed,weight;

function setup() {
  createCanvas(1000,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,150,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white");
  wall = createSprite(900,150,thickness,height/2);
}

function draw() {
  background(0);  
if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
}
if(damage>10)
{
  wall.shapeColor = ("red");
}
if(damage<10)
{
  wall.shapeColor = ("green");
}
  
  drawSprites();
  
}

function hasCollided (bullet,wall)
{
  bulletRightEdge = bullet.x  + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >=  wallLeftEdge)
  {
    return true;
  }
    return false;


}
 