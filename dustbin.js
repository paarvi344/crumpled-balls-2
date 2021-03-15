class Dustbin {
    constructor(x, y) {
    this.x=x;
    this.y=y;
    this.dustbinWidth=200;
    this.dustbinHeight=213;
    this.wallThickness=20;

    this.image=loadImage("dustbin.png");
    this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,isStatic)
      
  
      World.add(world,this.body);
    
    }
    display(){
      ellipseMode(RADIUS);
  
      fill("yellow");
  
      circle(this.body.position.x,this.body.position.y,this.radius)
  
    }
  
}