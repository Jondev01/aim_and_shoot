class Game{
  constructor(){
    this.player = new Player(width/2, height/2);
    this.enemies = [new Enemy()];
    this.state = new StateManager(this.player, this.enemies);
  }

  update(){
    this.player.update();
    for(let enemy of this.enemies){
      enemy.update();
    }
    this.state.update();
    this.generateEnemies();
  }

  show(){
    this.player.show();
    for(let enemy of this.enemies){
      enemy.show();
    }
  }

  mousePressed(mouseButton){
    if(mouseButton === LEFT){
      this.player.shoot();
    }
  }

  generateEnemies(){
    if(random(1) <= 0.01)
      this.enemies.push(new Enemy());
  }

}
