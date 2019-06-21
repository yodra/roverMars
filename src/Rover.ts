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
    if (this.direction === CardinalPoints.N) {
      this.location.incrementY();
    } else if (this.direction === CardinalPoints.E) {
      this.location.incrementX();
    } else if (this.direction === CardinalPoints.S) {
      this.location.decrementY();
    } else if (this.direction === CardinalPoints.W) {
      this.location.decrementX();
    }
  }

  backward() {
    this.location.decrementY();
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