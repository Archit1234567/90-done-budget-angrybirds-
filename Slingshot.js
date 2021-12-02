class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage ("sprites/sling1.png");
        this.sling2 = loadImage ("sprites/sling2.png");
        this.sling3 = loadImage ("sprites/sling3.png");
        World.add(world, this.sling);
        
    }
       
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           strokeWeight(4);
           stroke ( 48,22,8);
            line(pointA.x, pointA.y, pointB.x-20, pointB.y);
            strokeWeight(4);
           stroke ( 48,22,8);
            line(pointA.x, pointA.y, pointB.x+20, pointB.y);
            if (pointA.x<220){
        image (this.sling3,pointA.x-20,pointA.y,15,20);
            }
            else {
                image (this.sling3,pointA.x+20,pointA.y,15,20);
            }
        }

          image (this.sling1,200,40 );
        image (this.sling2,170,35);
    }
    
}