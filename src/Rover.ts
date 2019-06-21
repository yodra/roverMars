import { CardinalPoints, Location } from './Location';

export class Rover {

  public position: Location;

  constructor() {
    this.position = new Location(0, 0, CardinalPoints.N);
  }

  forward() {
    this.position.incrementY();
  }
}