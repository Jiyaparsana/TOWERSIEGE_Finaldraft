class Box extends BaseClass {
  constructor(x, y, width, height,angle){
    var options = {
      'restitution':0,
      'friction':0.05,
      'density':1.0
  }

    super(x,y,width,height,angle,options);
    this.Visiblity = 255;
  }
  display(){


    if(this.body.speed < 9){
      super.display();
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       rect(this.body, this.body.position.x, this.body.position.y, 30, 40);
       pop();
     }

   

     
    }
    Score(){
      if(this.Visibility<0 && this.Visiblity>-1005){
        score++;
      }
     }
  
    
  

};
