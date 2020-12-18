class Box{
    constructor(x,y,width,height){
    
        var options={
            resitution: 0.8,
            friction: 0.9,
            density: 1.1
        }

    this.body = Bodies.rectangle(x,y,width,height,options)
    this.w = width;
    this.h = height;
    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position

        var angle = this.body.angle
        //To add a new setting
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("yellow");
        rect(0,0,this.w,this.h)
        pop()

    }


}