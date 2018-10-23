class StateManager{
  constructor(player, enemies){
    this.player = player;
    this.enemies = enemies;
  }

  update(){
    this.enemyHit();
    this.playerHit();
  }

  enemyHit(){
    let player = this.player;
    if(player.shooting){
      for(let i=this.enemies.length-1; i>=0; i--){
        let enemy = this.enemies[i];
        if(enemy.contains(player.pos)){
          enemy.reduceHP(player.weapon.power);
          if(enemy.dead)
            this.enemies.splice(i,1);
        }
      }
      player.shooting = false;
    }
  }

  playerHit(){
    for(let enemy of this.enemies){
      if(enemy.shoot()){
        this.player.reduceHP(enemy.weapon.power);
      }
    }
  }
}
