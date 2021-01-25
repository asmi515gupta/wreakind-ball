class   Ball {
    constructor(x,y,r) {
      var options = {
        density:1,
        frictionAir:0.005
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.r,this.r);
    }
  };
