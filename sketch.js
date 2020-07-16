var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
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
	bob1=new bob(550,180,20);
	bob2=new bob(650,200,20);
	bob3=new bob(700,240,20);
	bob4=new bob(750,280,20);
	bob5=new bob(600,300,20);
	wall1=new wall(650,60,350,20);
	rope1= new string(bob1.body,wall1.body,550,60);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  Engine.update(engine);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rect(ground.position.x,ground.position.y,1300,20);
	 wall1.display();
	rope1.display();

  drawSprites();
 
}



