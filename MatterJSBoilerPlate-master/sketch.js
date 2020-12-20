const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper1, dustbin1, dustbin2, dustbin3, dustbinImg1;
var upPushed = false;
function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;
    paper1 = new Paper(100, 350, 20);
    dustbin1 = new Dustbin(600,480, 200, 20);
    dustbin2 = new Dustbin(500, 450, 20, 100);
    dustbin3 = new Dustbin(700, 450, 20, 100);
    ground1 = new Ground(400, 500, 800, 20);
    dustbinImg1 = new DustbinImg(600, 450, 200, 100)
}
function draw(){
    background(255);
    Engine.update(engine);
    paper1.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    dustbinImg1.display();
    if(keyCode === UP_ARROW){
        if(upPushed === false){
            upPushed = true;
            Matter.Body.applyForce(paper1.body, paper1.body.position, {x:60, y:-60})
        }
    }
}