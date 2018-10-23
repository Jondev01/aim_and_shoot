class Enemy{
  constructor(hp = 10){
    this.w = 20;
    this.h = 20;
    this.pos = createVector(this.w/2+random(width-this.w/2),
      this.h/2+random(height-this.h/2));
    this.hp = hp;
    this.weapon = new Weapon(1);
    this.dead = false;
  }

  update(){

  }

  show(){
    push();
    fill(255,0,0, 90);
    stroke(255);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.w, this.h);
    pop();
  }

  reduceHP(damage){
    this.hp -= damage;
    if(this.hp <= 0)
      this.dead = true;
  }

  contains(pos){
    return pos.x >= this.pos.x-this.w/2 &&
          pos.x <= this.pos.x+this.w/2 &&
          pos.y >= this.pos.y-this.h/2 &&
          pos.y <= this.pos.y+this.h/2;
  }

  shoot(){

  }
}
