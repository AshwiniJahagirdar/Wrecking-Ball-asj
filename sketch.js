const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;

function setup() {

  engine = Engine.create();
  world =engine.world;

  createCanvas(1000,500);

  ground =new Ground(500,480,1000,20);

  b1 = new Build(550,450);
  b2 = new Build(550,400);
  b3 = new Build(550,350);
  b4 = new Build(550,300);
  b5 =new Build(550,250);

  b6 = new Build(750,450);
  b7 = new Build(750,400);
  b8 = new Build(750,350);
  b9 = new Build(750,300);
  b10 =new Build(750,250);

  b11 = new Build(650,450);
  b12 = new Build(650,400);
  b13 = new Build(650,350);
  b14 = new Build(650,300);
  b15 =new Build(650,250);

  ball = new shooter(320,250);

  sling = new Slingshot(ball.body,{x:320,y:50})

}

function draw() {

  Engine.update(engine);

  background("black");  
  drawSprites();

  ground.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();

  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();


  ball.display();

  sling.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}




