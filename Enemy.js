class Enemy{
  constructor(hp = 10){
    this.w = 20;
    this.h = 20;
    this.age = 0;
    this.pos = createVector(this.w/2+random(width-this.w),
      this.h/2+random(height-this.h));
    this.hp = hp;
    this.weapon = new Weapon(1);
    this.dead = false;
    this.shootTimer = 0;
  }

  update(){
    this.age ++;
    if(this.shootTimer > 0)
      this.shootTimer--;
  }

  show(){
    push();
    fill(255,0,0, 90);
    if(this.shootTimer > 0){
      strokeWeight(3);
      stroke(255,255,0);
    }
    else stroke(255);
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
    if(this.age > 30 && random(1) < 0.01){
      this.shootTimer += 10;
      return true;
    }
    return false;
  }
}
