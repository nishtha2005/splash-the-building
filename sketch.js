const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,s1,s2;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
 
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    log1 = new Log(450,100,40,150,PI/1);
    log2= new Log(800,100,40,150,PI/1)
    log3= new Log(640,0,400,40,PI/1)
    log4= new Log(460,-100,30,200,-PI/1)
    log5= new Log(800,-100,30,200,PI/1)
    box1= new box(650,400)
    box2= new box(650,-50)
    box3= new box(570,-200)
    log6= new Log(640,-350,500,40,PI/1)
    log7= new Log(570,-500,300,30,-PI/2.5)
    log8= new Log(650,-500,300,30,PI/2.5)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    box1.display();
    box2.display();
    box3.display();
}