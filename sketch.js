var car,wall;

var speed,weight;

function setup() {
  createCanvas(800,800);
  
  speed= random(55,90)
  weight= random(400,1500)

  car= createSprite(200, 200, 50, 50);

  car.velocityX= speed;

  car.shapeColor= "blue";


  wall= createSprite(700, 300, 60, height/2)
  wall.shapeColor= "red";
}

function draw() {
  background(0);
  if(wall.x - car.x < (car.width + wall.width)/2)
  {
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180)
    {
      car.shapeColor= "red";
    }
    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor= "orange";
    }
    if(deformation<100)
    {
      car.shapeColor= "pink";
    }
  }  
  drawSprites();
}