class Player{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.hp = 100;
    this.r = 10;
    this.shooting = false;
    this.weapon = new Weapon(10);
    this.dead = false;
    this.hitTimer = 0;
    this.shootTimer = 0;
    this.score = 0;
  }

  update(){
    this.pos.x = mouseX;
    this.pos.y = mouseY;
    if(this.hitTimer > 0)
      this.hitTimer--;
    if(this.shootTimer > 0)
      this.shootTimer--;
  }

  show(){
    noCursor();
    push();
    noFill();
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 2*this.r, 2*this.r);
    if(this.shootTimer > 0){
      fill(255,255,0);
      noStroke();
      ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
    if(this.hitTimer > 0){
      fill(255,0,0,50);
      rect(0,0, width, height)
    }
    pop();
    this.displayHealth();
    this.displayScore();
  }

  shoot(){
    this.shooting = true;
    this.shootTimer = 10;
  }

  reduceHP(damage){
    this.hp -= damage;
    this.hitTimer += damage*5;
    if(this.hp <= 0){
      this.dead = true;
      noLoop();
    }
  }

  displayHealth(){
    push();
    /*noFill();
    stroke(255);
    rect(10,10,100,10);*/
    if(this.hp>=75)
      fill(0,255,0);
    else if(this.hp>= 25)
      fill(255,255,0);
    else{
      fill(255,0,0);
    }
    noStroke();
    rect(10,10,this.hp, 10);
    pop();
  }

  displayScore(){
    push();
    fill(255);
    text("score: "+this.score, 10,40);
    pop();
  }
}
