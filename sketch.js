var bullet;
var wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,800);
  createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,50,20,10);
  /*bullet2 = createSprite(50,250,20,10);
  bullet3 = createSprite(50,450,20,10);
  bullet4 = createSprite(50,650,20,10);
*/
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
  /*wall2 = createSprite(1200,300,thickness,height/2);
  wall3 = createSprite(1200,500,thickness,height/2);
  wall4 = createSprite(1200,700,thickness,height/2);
*/
  wall.shapeColor = "blue";
 
}

function draw() {
  background(255,255,255);  

//wall1
if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
  {
    wall.shapeColor = color(255,0,0);
  }

  if(damage<10)
  {
    wall.shapeColor = color(0,255,0);
  }
 /*// wall2
  if(hasCollided(bullet,wall))
{
  bullet2.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
  {
    wall2.shapeColor = color(255,0,0);
  }

  if(damage<10)
  {
    wall2.shapeColor = color(0,255,0);
  }
  //wall 3
  if(hasCollided(bullet,wall))
{
  bullet3.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
  {
    wall3.shapeColor = color(255,0,0);
  }

  if(damage<10)
  {
    wall3.shapeColor = color(0,255,0);
  }
  //wall4
  if(hasCollided(bullet,wall))
{
  bullet4.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
  {
    wall4.shapeColor = color(255,0,0);
  }

  if(damage<10)
  {
    wall4.shapeColor = color(0,255,0);
  }
}*/

  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
}
