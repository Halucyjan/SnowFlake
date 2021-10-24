class Particle {
  constructor(pos) {
    this.pos = createVector(pos.x, pos.y)
    this.R = 10;
  }

  update() {
    this.pos.x -= 1;
    this.pos.y += random(-1.5, 1.5);
    if(this.pos.y<0)
      {
        this.pos.y+=1.5;
      }
    if(this.pos.y>this.pos.x*3/4){
      this.pos.y-=1.5;
    }
  }

  show() {
    circle(this.pos.x, this.pos.y, this.R)
  }

  intersects(snowflake) {
    let result = false
    for (let flake of snowflake) {
      let distance = dist(flake.pos.x, flake.pos.y, this.pos.x, this.pos.y);
      if (distance < this.R ) {
        result = true;
        break;
      }
    }
    return result;
  }

  finished() {
    return (this.pos.x < 1);
  }
  end()
  {
    
  }

}