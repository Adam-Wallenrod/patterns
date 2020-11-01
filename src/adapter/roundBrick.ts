export class RoundBrick {

  protected radius: number;
  protected height: number;

  constructor(radius: number, height: number) {
    this.radius = radius;
    this.height = height;
  }


  public getRadius(): number {
    return this.radius;
  }

  public getHeight(): number {
    return this.height;
  }
}
