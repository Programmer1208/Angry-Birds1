
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world,ob1,ground;
function setup()
{
  createCanvas(1200,400);
 
  engine=Engine.create();
  world=engine.world;
  
 b1=new Box(700,320,70,70);
    b2=new Box(920,320,70,70);

    g1=new Ground(600,380,1200,40);

    p1=new Pig(800,345);
    l1=new Log(810,300,300,PI/2);

    b3=new Box(700,230,70,70);
    b4=new Box(920,230,70,70);
    p2=new Pig(800,295);
   l2=new Log(810,210,300,PI/2);

   b5=new Box(800,105,70,70);

   l3=new Log(700,100,130,PI/8)
   l4=new Log(890,100,130,-PI/6)
  bird=new Birds(100,100);
}

function draw()
{
  background("white");
  Engine.update(engine);
  
 
  b1.display();
  b2.display();
  g1.display();
  p1.display();
  l1.display();
  b3.display();
  b4.display();
  p2.display();
  l2.display();
  b5.display();
  l3.display();
  l4.display();
  bird.display();
}
