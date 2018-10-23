let player;
let enemy;
let game;
let width= 600;
let height= 400;

function setup() {
  createCanvas(600,400);
  player = new Player(width/2, height/2);
  enemy = new Enemy();
  game = new Game();
}

function draw() {
  background(40);
  player.update();
  enemy.show();
  player.show();
}

function mousePressed(){
  game.mousePressed(mouseButton);
}
