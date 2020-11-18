class Slingshot{

constructor(bodyA,pointB){
var options ={
    bodyA : bodyA,
    pointB : pointB,
    stiffness  : 2,
    length : 280
}
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world,this.sling);

}

display(){
var pointA = this.sling.bodyA.position;
var pointB = this.pointB;
strokeWeight(5);
stroke(255,0,127);
line(pointB.x,pointB.y,pointA.x,pointA.y);
}



}