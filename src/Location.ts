export class Location {

  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  getLocation(): Location {
    return this;
  }

  incrementY() {
    this.y++;
  }

  incrementX() {
    this.x++;
  }

  decrementY() {
    this.y--;
  }

  decrementX() {
    this.x--;
  }
}