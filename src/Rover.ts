import { Location } from './Location';

export enum CardinalPoints {
  N = 1,
  E = 2,
  S = 3,
  W = 4
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
    if (this.direction == CardinalPoints.N) {
      this.direction = CardinalPoints.E;
    } else if (this.direction == CardinalPoints.E) {
      this.direction = CardinalPoints.S;
    } else if (this.direction == CardinalPoints.S) {
      this.direction = CardinalPoints.W;
    } else if (this.direction == CardinalPoints.W) {
      this.direction = CardinalPoints.N;
    }

  }

  turnLeft() {
    if (this.direction == CardinalPoints.N) {
      this.direction = CardinalPoints.W;
    } else if (this.direction == CardinalPoints.W) {
      this.direction = CardinalPoints.S;
    }  else if (this.direction == CardinalPoints.S) {
      this.direction = CardinalPoints.E;
    }  else if (this.direction == CardinalPoints.E) {
      this.direction = CardinalPoints.N;
    }
  }
}