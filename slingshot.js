class slingshot{
constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1,
        length: 100
    }
    this.rope = Constraint.create(options);
    this.sling1=loadImage("sprites/sling1.png")
    this.sling2=loadImage("sprites/sling2.png")
    this.sling3=loadImage("sprites/sling3.png")
    World.add(world,this.rope);
    
}
display(){
if(this.rope.bodyA){
var pointA=this.rope.bodyA.position;
var pointB=this.rope.pointB;
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
image(this.sling1,200,30)
image(this.sling2,170,30)

}
fly(){
 this.rope.bodyA=null   
}
attach(body){
this.rope.bodyA=body
}
}
