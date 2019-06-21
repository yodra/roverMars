import { Location } from './Location';

export enum CardinalPoints {
  N,
  E,
  S,
  W,

}

export class Rover {

  public location: Location;
  public  direction: CardinalPoints;

  constructor() {
    this.location = new Location(0, 0);
    this.direction = CardinalPoints.N;
  }

  forward() {
    switch (this.direction) {
      case CardinalPoints.E:
        this.location.incrementX();
        break;
      case CardinalPoints.S:
        this.location.decrementY();
        break;
      case CardinalPoints.W:
        this.location.decrementX();
        break;
      default:
        this.location.incrementY();
    }
  }

  backward() {
    switch (this.direction) {
      case CardinalPoints.E:
        this.location.decrementX();
        break;
      case CardinalPoints.S:
        this.location.incrementY();
        break;
      case CardinalPoints.W:
        this.location.incrementX();
        break;
      default:
        this.location.decrementY();
    }
  }

  turnRight() {
    switch (this.direction) {
      case CardinalPoints.E:
        this.direction = CardinalPoints.S;
        break;
      case CardinalPoints.S:
        this.direction = CardinalPoints.W;
        break;
      case CardinalPoints.W:
        this.direction = CardinalPoints.N;
        break;
      default:
        this.direction = CardinalPoints.E;
    }
  }

  turnLeft() {
    switch (this.direction) {
      case CardinalPoints.E:
        this.direction = CardinalPoints.N;
        break;
      case CardinalPoints.S:
        this.direction = CardinalPoints.E;
        break;
      case CardinalPoints.W:
        this.direction = CardinalPoints.S;
        break;
      default:
        this.direction = CardinalPoints.W;
    }
  }
}