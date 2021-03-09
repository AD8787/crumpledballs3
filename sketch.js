const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 450, 70);

	ground = new Ground(400, 680, 800, 20);

	dustbin = new Dustbin(600, 650);

	launcher = new Launcher(paper.body,{x:300,y:300})


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);

  background("white");

  Engine.update(engine);

  paper.display();
  
  ground.display();

  dustbin.display();

  launcher.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:116.5, y:-116.5})
	}
}