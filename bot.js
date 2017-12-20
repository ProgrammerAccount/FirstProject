class Bot extends Object{
constructor(var SafeRange)
  {
    this.SafeRange=SafeRange;
  }

 AnalizePosition(var positionsOfEnemys)
  {
    for(var i=0;positionofEnemy.lenght>i;i++)
    {
      if(super.position/20-positionsOfEnemys[i].position/20>-5)
        return super.position+20;
      if(super.position/20-positionsOfEnemys[i].position/20<5)
        return super.position-20;
      if(super.position-positionsOfEnemys[i].position<5) 
        return super.position+1;
      if(super.position-positionsOfEnemys[i].position>-5)
        return super.position-1;
    }
  }
}
