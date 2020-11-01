import {RoundBrick} from './roundBrick';

export class Hole {

  private readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }


  public getRadius(): number {
    return this.radius;
  }


  public doesBrickFit(brick: RoundBrick): boolean {
    return this.radius >= brick.getRadius();
  }


}
