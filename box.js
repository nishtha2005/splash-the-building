class box {
    constructor(x, y,angle) {
      var options = {
        'density':1.0,
        'friction': 2.0,
        'restitution':0.5
      };
      this.body = Bodies.circle(x,y, 75, 75,75,75);
      this.width = 100;
      this.height = 100;
      this.angle = angle;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange')
      rectMode(CENTER)
      ellipse(30, 30, this.width, this.height);
      pop();
    };
  };