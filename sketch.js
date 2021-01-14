var player;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7;
var truck;
var ground;
var trucksGroup, trashGroup;
var score;
var gameState;
var startTime, endTime;
var truckImg;

function preload() {
  truckImg = loadImage("truck.png");
}

function setup() {
  createCanvas(1000,750);

  player = new Player();

  obstacle1 = createSprite(500, 550, 200, 20);
  obstacle2 = createSprite(850, 500, 200, 20);
  obstacle3 = createSprite(250, 400, 200, 20);
  obstacle4 = createSprite(100, 300, 200, 20);
  obstacle5 = createSprite(600, 350, 200, 20);
  obstacle6 = createSprite(250, 200, 200, 20);
  obstacle7 = createSprite(800, 250, 200, 20);

  ground = createSprite(500, 740, 1000, 20);

  trucksGroup = new Group();
  trashGroup = new Group();

  score = 0;

  startTime = second();

  if (startTime > 29) {
    endTime = startTime - 30;
  } else {
    endTime = startTime + 30;
  }

  gameState = "play";

  console.log(startTime);
  console.log(endTime);
}

function draw() {
  background(0);  

  if (gameState === "play") {

  player.move();
  spawnTrucks();

text( "Seconds Left: "+ (30-second()), 400,20);


 var r = Math.round(random(1,2))
  for (var i = 0; i < trucksGroup.maxDepth(); i=i+1) {
    var t = trucksGroup.get(i); 


    
    if (t != null && frameCount % 80 === 0 && i%2===0) {  
      var trash = createSprite(t.x, 100, 20, 20);
      trash.velocityY = 6;
      trash.lifetime = 200;
      trashGroup.add(trash);
    }
  }

  for (var i = 0; i < trashGroup.maxDepth(); i++) {
    var t = trashGroup.get(i);

    if (t != null) {
      obstacleCollide(t);
     if (player.playerSprite.isTouching(t)) {
        t.destroy();
        score = score + 1;
      }
    }
  }
  obstacleCollide(player.playerSprite);

  //creating gameState end
if (endTime === second()) {
  gameState = "end";
}
} else if (gameState === "end") {
  text("GAME OVER", 500, 325);
}

  text("Score = " + score, 50, 50); 
  
  drawSprites();

  console.log(second());
}

function spawnTrucks() {
  if (frameCount % 100 === 0) {
    var truck = createSprite(100, 100, 50 ,50);
    truck.addImage(truckImg);
    truck.scale = 0.2;
    truck.velocityX = 4;
    truck.lifetime = 250;

    trucksGroup.add(truck);
  }
}

function obstacleCollide(a) {
  a.collide(obstacle1);
  a.collide(obstacle2);
  a.collide(obstacle3);
  a.collide(obstacle4);
  a.collide(obstacle5);
  a.collide(obstacle6);
  a.collide(obstacle7);
  a.collide(ground);
}

