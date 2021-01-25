const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var ball;
var rope;
var box
var box1,box2,box3,box4,box5;

function preload()
{
	
}

function setup() {
	createCanvas(1100, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,400,700,10);
    ball=new Ball(350,300,50);
	rope=new Rope(ball.body,{x:500,y:50});
	box =new Box(500,250,50,50);
	box1 =new Box(550,200,50,50);	
	box2 =new Box(500,170,50,50);
	box3=new Box(500,150,50,50);
	box4=new Box(500,120,50,50);
	box5 =new Box(500,100,50,50);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  ball.display();
  rope.display();
  box.display();
  box1.display();
 // box2.display();
  //box3.display();
  //box4.display();
  //box5.display();
  drawSprites();
 
}



