export class SquareBrick {

  private readonly height: number;
  private readonly width: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }


  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }


}
