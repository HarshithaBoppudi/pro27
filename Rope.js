class string{
    constructor(bodyA, bodyB,x,y){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.x= x;
        this.y=y;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
       
    }

   

    display(){
       fill("aqua");
       
           
            strokeWeight(4);
            stroke("#301608");
            
                line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
               
           

           }
        }
    
    
