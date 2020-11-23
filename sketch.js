var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,10,30);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
  bullet.shapeColor = "white";
  wall.shapeColor = 80,80,80;
}

function draw() {
  background("black");
  
  if (isTouching(wall, bullet)) {
    bullet.velocityX=0;
    damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if (damage<10) {
      wall.shapeColor = "green";
    }else if (damage>10) {
      wall.shapeColor = "red";
    }
  }
  else {
    bullet.shapeColor = "white";
    wall.shapeColor = "grey";
  }  
  drawSprites();
}

function isTouching(object1, object2) {
  if(object2.width/2 + object1.width/2 > object2.x - object1.x &&
      object2.width/2 + object1.width/2 > object1.x - object2.x &&
      object2.height/2 + object1.height/2 > object2.y - object1.y &&
      object2.height/2 + object1.height/2 > object1.y - object2.y) {
      return true;
  } else {
      return false;
  }
}