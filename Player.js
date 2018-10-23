class Player{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.hp = 100;
    this.r = 10;
    this.shooting = false;
  }

  update(){
    this.pos.x = mouseX;
    this.pos.y = mouseY;
    this.shoot();
  }

  show(){
    noFill();
    stroke(255);
    noCursor();
    ellipse(this.pos.x, this.pos.y, 2*this.r, 2*this.r);
  }

  shoot(){
    this.shooting = true;
    push();
    fill(255,255,0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    pop();
  }
}
