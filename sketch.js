const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var ground,ball;
var enigne,world;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,50,ground_options);
  World.add(world,ground)
  var ball_options ={
     restitution: 2.0 }
  ball=Bodies.circle(200,100,30)
  World.add(world,ball)
  console.log(ground);
  console.log(ground.position.x)
  console.log(ground.position.y)
  // please run and check
  // it will bounce like the ball is falling on ground...not like code.org
// check open chat

}


function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER)  
  rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20)
  
}