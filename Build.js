class Build{

    constructor(x,y){
        var options = {
         restitution : 0.2,
         friction : 0.5,
         density : 1
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.hieght =50;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("lightblue");
        rect(0,0,this.width,this.hieght);
        pop();
        
    }

}
