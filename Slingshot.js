class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }


    display() {
        if (this.slingshot.bodyA)
            var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke(48, 22, 8)
        strokeWeight(3)
        line(pointB.x, pointB.y, pointA.x, pointA.y)
        pop();
    }
}