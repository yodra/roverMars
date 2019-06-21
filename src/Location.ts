export class Location {

  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;

  }

  incrementY() {
    this.y++;
  }

  decrementY() {
    this.y--;
  }

}