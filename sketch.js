const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1=new Box(200,100,50,50);
    box2=new Box(240,100,50,100);
    ground=new Ground(200,390,400,20);

    //var ground_options ={
      //  isStatic: true
    //}

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
   // rectMode(CENTER);
   // rect(ground.position.x,ground.position.y,400,20);

   // ellipseMode(RADIUS);
   //ellipse(ball.position.x, ball.position.y, 20, 20);
}