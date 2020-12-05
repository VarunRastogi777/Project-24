
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground
var box,box1,box2

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.z
	ball=new Paper(15)
	ground=new Ground()
	box1=new Box(575,615,10,50)
	box2=new Box(724,615,10,50)
	box=new Box(650,635,150,10)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  ground.display()
  box.display()
  box1.display()
  box2.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:32,y:-35})
	}
}



