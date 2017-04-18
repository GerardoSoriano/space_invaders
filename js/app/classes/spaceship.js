import Bullet from 'bullet.js';
class Spaceship{
  constructor(){
    this.xPosition = 0;
    this.yPosition = 0;
    this.velFactor = 1;
    this.lifes = 3;
    this.bullets = 10;
    this.el = $("div.spaceship");
  }

  GetXPosition(){
    return this.xPosition;
  }
  GetYPosition(){
    return this.yPosition
  }
  GetPosition(xPosition,yPosition){
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }
  GetVelFactor(){
    return this.velFactor;
  }
  SetVelFactor(velFactor){
    this.velFactor = velFactor;
  }
  GetEl(){
    return this.el;
  }
  Update(){
    this.el.css("transform","translate("+ this.xPosition +"px,"+ this.yPosition +"px)");
  }
}

export default Spaceship;
