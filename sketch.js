var engine,world;
var dustbinObj,dustbinImg;
var paperObject,paperImg;
var groundObj

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
	dustbinImg=loadImage("dustbingreen.png");
	paperImg=loadImage("paper.png");
}

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine= Engine.create();
	world= engine.world;

	paperObj=createSprite(100,550, 10,10);
	paperObj.addImage(paperImg);
	paperObj.scale=0.2;

	dustbinObj=createSprite(900, 485, 10,10);
	dustbinObj.addImage(dustbinImg);
	dustbinObj.scale=0.6;
	
    groundObj=createSprite(500,590,1500,15);

	Engine.run(engine);

}

  function draw() {
	rectMode(CENTER);
	background(220);


  Engine.update(engine);

  paperObj.display(); 
  dustbinObj.display();	
  groundObj.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:130,y:-145});
	}
}
