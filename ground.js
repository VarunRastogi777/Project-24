class Ground {
    constructor() {
      var options = {
          isStatic:true
      }
      this.body = Bodies.rectangle(400,650,800,20, options);
      
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("aqua");
      rect(400,650,800,20);
    }
  };
  