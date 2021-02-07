const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var Myengine,Myworld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
Myengine=Engine.create();
Myworld=Myengine.world;
// isStatic here means constant(a fixed position)
var A={
isStatic: true
}


ground=Bodies.rectangle(200,390,400,20,A);
World.add(Myworld,ground);
console.log(ground);
// Here restitution means bouncing,higher the restitution more will be the ball able to bounce high
var B={
restitution: 1.5
}
ball=Bodies.circle(200,100,20,B);
World.add(Myworld,ball);
}

function draw() {
  background(0);
  Engine.update(Myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}