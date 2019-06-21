import { CardinalPoints, Rover } from '../src/Rover';
import { Location} from '../src/Location';


describe('The Rover robot should', () => {
  it('have initial location', () => {
    const rover = new Rover();

    expect(rover.location).toEqual(new Location(0, 0));
  });

  it('have initial direction', () => {
    const rover = new Rover();

    expect(rover.direction).toEqual(CardinalPoints.N);
  });

  it('be move forward with initial direction', () => {
    const rover = new Rover();
    rover.forward();

    expect(rover.location).toEqual(new Location(0, 1));
  });

  it('be move backward with initial direction', () => {
    const rover = new Rover();
    rover.backward();

    expect(rover.location).toEqual(new Location(0, -1));
  });

  it('be turn right with initial direction', () => {
    const rover = new Rover();
    rover.turnRight();

    expect(rover.direction).toEqual(CardinalPoints.E);
  });

  it('be turn left with initial direction', () => {
    const rover = new Rover();
    rover.turnLeft();

    expect(rover.direction).toEqual(CardinalPoints.W);
  });

  it('be forward to east direction', () => {
    const rover = new Rover();
    rover.turnRight();
    rover.forward();

    expect(rover.location).toEqual(new Location(1, 0));
    expect(rover.direction).toEqual(CardinalPoints.E);
  });

  it('be forward to west direction', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.forward();

    expect(rover.location).toEqual(new Location(-1, 0));
    expect(rover.direction).toEqual(CardinalPoints.W);
  });


  it('be look south turning 180 degrees', () => {
    const rover = new Rover();
    rover.turnRight();
    rover.turnRight();

    expect(rover.direction).toEqual(CardinalPoints.S);
  });

  it('be look south turning 270 degrees', () => {
    const rover = new Rover();
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();

    expect(rover.direction).toEqual(CardinalPoints.W);
  });

  it('be look south turning 360 degrees', () => {
    const rover = new Rover();
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();

    expect(rover.direction).toEqual(CardinalPoints.N);
  });

  it('be look south turning -180 degrees', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.turnLeft();

    expect(rover.direction).toEqual(CardinalPoints.S);
  });

  it('be look south turning -270 degrees', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();

    expect(rover.direction).toEqual(CardinalPoints.E);
  });

  it('be look south turning -360 degrees', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();

    expect(rover.direction).toEqual(CardinalPoints.N);
  });

  it('be forward to south direction', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.turnLeft();
    rover.forward();

    expect(rover.location).toEqual(new Location(0, -1));
    expect(rover.direction).toEqual(CardinalPoints.S);
  });

});
