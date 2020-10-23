class Bin{
constructor(){
    this.image = loadImage("sprites/dustbingreen.png");
   
    
    
var options = {
    isStatic: true
}
 this.body = Matter.Bodies.rectangle(600,585,30,30,options);






    this.width = width;
    this.height = height;


    World.add(world, this.body); 
}

display(){
    var pos = this.body.position;

    imageMode(CENTER);

   image(this.image, pos.x, pos.y, 90, 120);

    

}



}