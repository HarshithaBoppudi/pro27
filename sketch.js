var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 400);
	engine = Engine.create();
	world = engine.world;
	var ground_options={
		isStatic:true,

	}
	ground=Bodies.rectangle(650,390,1300,20,ground_options);
	World.add(world,ground);
	bob1=new bob(200,180,20);
	bob2=new bob(300,200,20);

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,1300,20);
  Engine.update(engine);
	bob1.display();
	bob2.display();
	 
 

  drawSprites();
 
}



