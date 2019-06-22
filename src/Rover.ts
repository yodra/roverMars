import { North } from './CardinalPoints';
import { Location } from './Location';
import { Terminal } from './Terminal';

export class Rover {
  public direction: any;
  public location: Location
  private terminal: Terminal

  constructor() {
    this.direction = new North();
    this.location = new Location(0, 0);
    this.terminal = new Terminal(this)
  }

  execute = (...commands : string[]) => {
    commands.forEach(command => this.terminal.process(command).execute())
  }

  forward = () => {
    this.location = this.direction.forward()
  }
  
  backward = () => {
    this.location = this.direction.backward()
  }

  turnRight = () => {
    this.direction = this.direction.next()
  }

  turnLeft = () => {
    this.direction = this.direction.previous()
  }

}