class Ground{

    constructor(x,y,width,hieght){
        var options = {
       isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width ,hieght,options);
        this.width = width;
        this.hieght =hieght;
        World.add(world,this.body);
    }
    display(){
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.hieght);
        
    }

}
