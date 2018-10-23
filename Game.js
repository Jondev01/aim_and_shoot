class Game{
  constructor(){
    this.player = new Player(width/2, height/2);
    this.enemies = [];
  }

  update(){
    this.player.update();
    for(let enemy of this.enemies){
      enemy.update();
    }
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

}
