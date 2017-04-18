class Bullet {
  constructor(xPosition,yPosition,velFactor) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.velFactor = velFactor;
  }
  OnCreate(){

  }
  OnDestroy(){

  }
  Update(velBullet){
    this.yPosition-=velBullet
  }
  Draw(){

  }
}
