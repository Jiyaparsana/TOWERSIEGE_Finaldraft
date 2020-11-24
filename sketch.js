const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base1,base2
var block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25
var polygon
var slingShot
var score = 0

function preload(){
 
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  
  base1 = new Ground(385,450,200,10)
  base2 = new Ground(600,250,200,10)

  //level 2
  block8 = new Box(330,430,30,40,PI/2)
  block9 = new Box(360,430,30,40,PI/2)
  block10 = new Box(390,430,30,40,PI/2)
  block11 = new Box(420,430,30,40,PI/2)
  block12 = new Box(450,430,30,40,PI/2)

  //level 3
  block13 = new Box(360,390,30,40,PI/2)
  block14 = new Box(390,390,30,40,PI/2)
  block15 = new Box(420,390,30,40,PI/2)

  //top
  block16 = new Box(380,340,30,40,PI/2)

    //level 2
    block17 = new Box(530,235,30,40,PI/2)
    block18 = new Box(560,235,30,40,PI/2)
    block19 = new Box(590,235,30,40,PI/2)
    block20 = new Box(620,235,30,40,PI/2)
    block21 = new Box(650,235,30,40,PI/2)
  
    //level 3
    block22 = new Box(560,195,30,40,PI/2)
    block23 = new Box(590,195,30,40,PI/2)
    block24 = new Box(620,195,30,40,PI/2)
  
    //top
    block25 = new Box(590,155,30,40,PI/2)

  polygon = new Polygon(50,200,20)



  slingshot = new SlingShot(polygon.body,{x:100, y:200});

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  text("SCORE :  " + score, 750, 40)

  base1.display()
  base2.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()

  polygon.display()
slingshot.display()

  
  block8.Score();
  block9.Score();
  block10.Score();
  block11.Score()
  block12.Score();
  block13.Score();
  block14.Score();
  block15.Score();
  block16.Score();
  block17.Score();
  block18.Score();
  block19.Score();
  block20.Score();
  block21.Score()
  block22.Score();
  block23.Score();
  block24.Score();
  block25.Score();


  drawSprites();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body,{x:50, y:200})
    slingshot.attach(polygon.body)
    
  }
}
