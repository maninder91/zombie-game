
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
} */

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
function preload()
{
    
}

function setup() {
    createCanvas(900, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
  
    ground = createSprite(450,650,900,15);
    ground.shapeColor = color("white");
    World.add(world,ground);
    log1 = createSprite(760,635,190,15);
    log2 = createSprite(665,592,15,100);
    log3 = createSprite(850,592,15,100);
    log1.shapeColor = color("yellow");
    log2.shapeColor = color("yellow");
    log3.shapeColor = color("yellow");
    
    paper1 = createSprite(200,50,ellipse);
    paper1.shapeColor = color("purple");

    paperObject = Bodies.circle(width/18 , 200 , 5 , {restitution:0.3, isStatic:true,friction:0.5,density:1.2});
    World.add(world, paperObject);

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);

    

    World.add(world,paper1);
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  fill("purple");
  ellipse(paper1.x,paper1.y,20,20);
  paper1.x= paperObject.position.x ;
  paper1.y= paperObject.position.y ;
  drawSprites();
  
  function keyPressed() {
	
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body.position,paperObject.body.position,{x:85,y:-85});
  
	}

 
}
}

/*function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
         Body.setStatic(paperObject,false); 
  Matter.Body.applyForce(paperObject.body.position,paperObject.body.position,
	{
	  x:12,
	  
      y:-13 
    });
    }
} */
