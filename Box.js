class Box {
    constructor(x,y,width,height) {
      var options = {
         restitution:1,
         friction:2,
         density:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      translate(pos.x,pos.y);
      fill("white");
      rect(0,0, this.width, this.height);
    }
  };
