class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          'restitution':0.8,
          'friction': 1.0,
          'density':1.0
      }
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(255);
      //strokeWeight(5);
      //stroke(0, 255, 0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  