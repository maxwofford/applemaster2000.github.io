var player;
var playerImage;
var enemy;
var enemyImage;
var isGameOver;
var backgroundImage;

function setup(){
    createCanvas(window.innerWidth/2, window.innerHeight/1.1);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0);
    enemy.addImage(enemyImage);
    enemy.rotationSpeed = 4.0;
    isGameOver = false;
}

function movePlayer(){
    if(keyDown(RIGHT_ARROW) && player.position.x + player.width/2 < width){
        player.position.x = player.position.x + 5;
    }
    if(keyDown(LEFT_ARROW) && player.position.x - player.width/2 > 0){
       player.position.x = player.position.x - 5;
    }
}

function preload(){
    playerImage = loadImage("player.png");
    backgroundImage = loadImage("background.png");
    enemyImage = loadImage("moon-15892-large.png");
}

function gameOver(){
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked(){
    if(isGameOver){
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height - (playerImage.height/2);
        enemy.position.x = width/2;
        enemy.position.y = 0;
    }
}

function moveEnemy(){
    enemy.position.y = enemy.position.y + 5;
    
    if(enemy.position.y > height){
        enemy.position.y = 0;
        enemy.position.x = random(0, width-5);
    }
    if(enemy.overlap(player)){
        isGameOver = true;
    }
}

function draw(){
    background(backgroundImage);
    if(isGameOver){
        gameOver();
    }
    else{
        movePlayer();
        moveEnemy();
    }
    drawSprites();
}