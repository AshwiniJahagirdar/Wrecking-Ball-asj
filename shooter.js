class shooter{

    constructor(x,y){
        var options = {
         restitution : 0.2,
         friction : 0.5,
         density : 1
        }
        this.body = Bodies.circle(x,y,15,options);
       this.radius =20;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
        
    }

}
