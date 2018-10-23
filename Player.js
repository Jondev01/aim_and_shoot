class Player{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.hp = 100;
    this.r = 10;
    this.shooting = false;
    this.weapon = new Weapon(10);
    this.dead = false;
  }

  update(){
    this.pos.x = mouseX;
    this.pos.y = mouseY;
  }

  show(){
    noCursor();
    push();
    noFill();
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 2*this.r, 2*this.r);
    fill(255,255,0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    pop();
  }

  shoot(){
    this.shooting = true;
  }

  reduceHP(damage){
    this.hp -= damage;
    if(this.hp <= 0)
      this.dead = true;
  }
}
