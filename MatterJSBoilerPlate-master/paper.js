var radius, pos;
class Paper {
    constructor(x, y, r) {
      var options = {
          isStatic:false,
          'restitution':0.9,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r, options);
      this.image = loadImage('paper.png')
      World.add(world, this.body);
      radius = r;
      pos =this.body.position;
    }
    display(){
      //fill(0);
      //strokeWeight(5);
      //stroke(0, 0, 255);
      //ellipse(pos.x, pos.y, radius, radius);
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };
  