import {Component} from '@angular/core';
import {Hole} from '../adapter/hole';
import {RoundBrick} from '../adapter/roundBrick';
import {SquareBrick} from '../adapter/squareBrick';
import {SquareBrickAdapter} from '../adapter/squareBrickAdapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'patterns-app';
  firstHole = new Hole(5);

  firstRoundedBrick = new RoundBrick(3, 10);
  secondRoundedBrick = new RoundBrick(5, 20);
  thirdRoundedBrick = new RoundBrick(6, 20);

  firstSquareBrick = new SquareBrick(8, 12);

  constructor() {

    console.log('firstHole: ', this.firstHole);
    console.log('firstHole r = ', this.firstHole.getRadius());

    console.log('first round brick fits ? --> ', this.firstHole.doesBrickFit(this.firstRoundedBrick));
    console.log('first round brick fits ? --> ', this.firstHole.doesBrickFit(this.secondRoundedBrick));
    console.log('first round brick fits ? --> ', this.firstHole.doesBrickFit(this.thirdRoundedBrick));

    const firstSquareBrickAdapter = new SquareBrickAdapter(0, 0, this.firstSquareBrick);
    console.log('first square brick fits? --> ', this.firstHole.doesBrickFit(firstSquareBrickAdapter));


  }
}
