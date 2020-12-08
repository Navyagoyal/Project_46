
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;
var playerimg;

function preload()
{
	playerimg = loadImage("Images/Boy.png");
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player = createSprite(250,480,10,10);
	player.addImage(playerimg);
	player.scale = 0.02;
	
	wall1 = createSprite(120,480,235,4);
	wall2 = createSprite(380,480,235,4);
	wall3 = createSprite(2,250,4,460);
	wall4 = createSprite(495,250,4,460);
	wall5 = createSprite(2,20,465,4);
	wall6 = createSprite(380,20,235,4);
	wall7 = createSprite(235,460,4,40);
	wall8 = createSprite(50,460,4,40);
	wall9 = createSprite(265,470,4,20);
	wall10 = createSprite(340,470,4,20);
	wall11 = createSprite(2,460,40,4);
	wall12 = createSprite(120,460,80,4);
	wall13 = createSprite(283,460,40,4);
	wall14 = createSprite(301,445,4,30);
	wall15 = createSprite(450,462,90,4);
	wall16 = createSprite(374,432,150,4);
	wall17 = createSprite(478,402,30,4);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  var edges = createEdgeSprites();
  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  player.bounceOff(wall7);
  player.bounceOff(wall8);
  player.bounceOff(wall9);
  player.bounceOff(wall10);
  player.bounceOff(wall11);
  player.bounceOff(wall12);
  player.bounceOff(wall13);
  player.bounceOff(wall14);
  player.bounceOff(wall15);
  player.bounceOff(wall16);
  if(keyDown(UP_ARROW)){
	player.y = player.y -1;
  }
  if(keyDown(DOWN_ARROW)){
	player.y = player.y +1;
  }
  if(keyDown(LEFT_ARROW)){
	player.x = player.x -1;
  }
  if(keyDown(RIGHT_ARROW)){
	player.x = player.x +1;
  }
  drawSprites();
 
}



