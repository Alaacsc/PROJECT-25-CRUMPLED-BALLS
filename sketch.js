
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObj;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

    paperObj = new Paper(1200,400);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  keyPressed();
 

  groundObject.display();
  dustbinObj.display();

  paperObj.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	  Matter.Body.setStatic(paperObj,false);
	  
	 }
   }