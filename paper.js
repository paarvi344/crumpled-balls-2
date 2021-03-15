class Paper {
  constructor(x, y,radius) {
    var options = {
        'restitution':0,
        'friction':1,
        'density':1.2
    }

    this.x=x;
    this.y=y;
    this.radius=radius;
    this.image=loadImage("paper.png");
    this.body = Bodies.circle(x, y,radius,options);

    World.add(world,this.body);

  }
  display(){
    ellipseMode(RADIUS);

    fill("255,0,255");

    circle(this.body.position.x,this.body.position.y,this.radius)

  }
};
