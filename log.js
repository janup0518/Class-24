class Log {
    constructor(x,y,height, angle){
        var box_options = {
            restitution:0.8,
            friction: 2,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,20,height,box_options) 
        this.width = 20
        this.height = height
        World.add(world,this.body)
        Matter.Body.setAngle(this.body, angle)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("yellow")
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}