class Paper {
    constructor(x, y) {
      var options = {
          'isStatic' : false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.body = ellipse(x, y, 50, 50, options);
      this.body = Bodies.ellipse(x, y, width, height, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      var angle = this.body.angle;


      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(3);
      stroke('red');
      fill('red');
      ellipse(this.image,x, y, this.width, this.height);
      pop();
    }
  }