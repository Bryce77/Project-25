var ball,ground,bin;

var world;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    

	engine = Engine.create();
	world = engine.world;

	

		var options = {
			isStatic: true,	
					
			}

			var options2 = {
				isStatic: true,	
				
						
				}

			

	//Create the Bodies Here.
	ground = Bodies.rectangle(400,671,801,20, options);
	
	//bottom
	binwall1 = Bodies.rectangle(600,630,70,10, options2);
	
	binwall2 = Bodies.rectangle(630,590,10,100, options2);

	binwall3 = Bodies.rectangle(570,600,10,70, options2);

	fill(203,223,234);

	ball = new Paper(330,200,30,30);
 	bin = new Bin ();
	
	
	
	   World.add(world, ground);
	   World.add(world, binwall1);
	   World.add(world, binwall2);
	   World.add(world, binwall3);
		
		
		

	Engine.run(engine);
  
 
	
	

}


function draw() {
  rectMode(CENTER);
  
  background(rgb(81,111,181));

   
    

	
	rect(ground.position.x,ground.position.y,801,60);

	rect(binwall1.position.x,binwall1.position.y,70,10);
	rect(binwall2.position.x,binwall2.position.y,10,80);
	rect(binwall3.position.x,binwall3.position.y,10,70);
	
	ball.display();
	bin.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-120}); 

 }
 }