var x, y;
class DustbinImg {
    constructor(x1, y1) {
      this.image = loadImage('dustbingreen.png')
      x = x1;
      y = y1;
    }
    display(){
      imageMode(CENTER);
      image(this.image, x, y, 200, 100);
    }
};
  