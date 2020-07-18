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
	rope1= new string(bob2.body,wall1.body,10,0);
	rope2= new string(bob1.body,wall1.body,-75,0);
	rope3= new string(bob3.body,wall1.body,45,0);
	rope4= new string(bob4.body,wall1.body,80,0);
	rope5= new string(bob5.body,wall1.body,-35,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1300,20);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	 wall1.display();
	
	 keyPressed();
  drawSprites();
 
}
function keyPressed(){
if(keyCode=== UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-5,y:-1});
	
}



}



