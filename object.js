class Paper{
    constructor(diameter){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.body=Bodies.circle(100,200,diameter,options)
    this.diameter=diameter
    World.add(world,this.body)
    }
    display(){
        push()
        ellipseMode(RADIUS)
        fill("pink")
        ellipse(this.body.position.x,this.body.position.y,this.diameter);
        pop()
    } 
}