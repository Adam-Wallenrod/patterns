import {SquareBrick} from './squareBrick';
import {RoundBrick} from './roundBrick';

export class SquareBrickAdapter extends RoundBrick {

  private squareBrick: SquareBrick;

  // TODO: constructor overload???
  constructor(radius, height, squareBrick: SquareBrick) {
    super(radius, height);
    this.squareBrick = squareBrick;
    this.height = this.squareBrick.getHeight();
  }


  public getRadius(): number {
    return this.squareBrick.getWidth() * Math.sqrt(2) / 2;
  }

  public getHeight(): number {
    return this.height;
  }


}
