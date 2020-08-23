const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
var world,engine,ground;
var particles = [];
var division1,division2,division3;
var divitionHight = 300;


function setup() {
  createCanvas(1200,1200);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   division1=new Division (200,height-10,200,500);
   division2=new Division (600,height-10,200,500);
   division3=new Division (1000,height-10,200,500);
}
function draw() {
  background(255); 
  division1.display();
  division2.display();
  division3.display();
  
  Engine.update(engine);
  ground.display();
  
  if(frameCount%60 === 0) {
    particles.push(new Particle(random(width/2-30,width/2+30),10,50));
  }
  for (var j = 0;j<particles.length; j++) {
    particles[j].display();
  }
  
  drawSprites();
}