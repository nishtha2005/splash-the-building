class Log {
    constructor(x, y,width,height,angle) {
      var options = {
        'density':0.5,
        'friction': 50.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, width,height,options,angle);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body, angle)
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
      rect(0, 0, this.width, this.height);
      pop();
    };
  };