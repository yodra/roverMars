import { Location } from './Location';

export enum CardinalPoints {
  N,
  E,
  S,
  W
}

export class Rover {

  public location: Location;
  public  direction: CardinalPoints;

  constructor() {
    this.location = new Location(0, 0);
    this.direction = CardinalPoints.N;
  }

  forward() {
    this.location.incrementY();
  }

  backward() {
    this.location.decrementY();
  }

  turnRight() {
    this.direction = CardinalPoints.E;
  }

}