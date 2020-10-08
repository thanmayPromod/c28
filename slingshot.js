class slingshot{
constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1,
        length: 30
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
image(this.sling1,200,30)
    image(this.sling2,170,30)
if(pointA.x<220){
    stroke ("#301608")
    strokeWeight(10)
    line(pointA.x-20,pointA.y,pointB.x-10,pointB.y)
    line(pointA.x-20,pointA.y,pointB.x+30,pointB.y)
    image(this.sling3,pointA.x-30,pointA.y-10,15,30)   
}else{
    stroke ("#301608")
    strokeWeight(10)
    line(pointA.x+20,pointA.y,pointB.x-10,pointB.y)
    line(pointA.x+20,pointA.y,pointB.x+30,pointB.y)
    image(this.sling3,pointA.x+25,pointA.y-10,15,30)
}

}

}
fly(){
 this.rope.bodyA=null   
}
attach(body){
this.rope.bodyA=body
}
}
