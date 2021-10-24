var position;
var current;
var snowflake;

function setup() {
  createCanvas(400, 400);
  position = createVector(width / 2, random(0, 75));
  current = new Particle(position);
  snowflake = [];
}

function draw() {
  background(0);
  position = createVector(width / 2, random(0, 75));
  translate(width / 2, height / 2)
  
  for (let i = 0; i < 10; i++) {
    current.update();

    if (current.finished() || current.intersects(snowflake)) {
      snowflake.push(current)
      if(snowflake.length == 50)
      {
        noLoop();
      }
      current = new Particle(position);
    }
    // to samo co niżej z forEach
    // for( let flake of snowflake){
    //   flake.show();
    // }

    //for (let i = 0; i < 1; i++) {
      rotate(PI / 3)
      current.show();
      snowflake.forEach(element => element.show())

      push()
      scale(1, -1)
      current.show();
      snowflake.forEach(element => element.show())
      pop()
    
    //}
  }

}