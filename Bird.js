

class Birds extends BaseClass
{
    constructor(x,y)
    {
      super(x,y,50,50);
      this.image =loadImage("sprites/bird.png");
    }

    display()
    {
      //  this.image.position.x=mouseX;
        //this.image.position.y=mouseY;
        super.display();
    }
}

