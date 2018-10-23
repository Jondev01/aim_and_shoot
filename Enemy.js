class Enemy{
  constructor(hp = 10){
    this.w = 20;
    this.h = 20;
    this.pos = createVector(this.w/2+random(width-this.w/2),
      this.h/2+random(height-this.h/2));
    this.hp = hp;
  }

  update(){

  }

  show(){
    push();
    fill(255,0,0, 90);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.w, this.h);
    pop();
  }
}
