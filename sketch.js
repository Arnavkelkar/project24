
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var b1,b2,b3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	b1=createSprite(400,640,200,20);
	b2=createSprite(500,580,20,100);
	b3=createSprite(300,580,20,100);

	engine = Engine.create();
	world = engine.world;

	b1=Bodies.rectangle(400,640,200,20,{isStatic:true});
	World.add(world, b1);
	b2=Bodies.rectangle(500,580,20,100,{isStatic:true});
	World.add(world, b2);
	b3=Bodies.rectangle(300,580,20,100,{isStatic:true});
	World.add(world, b3);

	Engine.run(engine);

	paper = new Paper(400,300)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper.display();
 
}

function KeyPressed(){
	if(keycode === UP_ARROW){
		Matter.body.applyforce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



