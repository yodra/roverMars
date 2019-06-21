export enum CardinalPoints {
  N,
  E,
  S,
  W
}

export class Location {

  private x: number;
  private y: number;
  private direction: CardinalPoints;

  constructor(x: number, y: number, direction: CardinalPoints) {
    this.x = x;
    this.y = y;
    this.direction = direction;

  }

  incrementY() {
    this.y++;
  }

  decrementY() {
    this.y--;
  }

  turnRight() {
    this.direction = CardinalPoints.E;
  }
}