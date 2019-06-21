import { Rover } from '../src/Rover';
import { Location, CardinalPoints } from '../src/Location';


describe('The Rover robot should', () => {
  it('have initial location', () => {
    const rover = new Rover();

    expect(rover.position).toEqual(new Location(0, 0, CardinalPoints.N));
  });

  it('be walk forward', () => {
    const rover = new Rover();
    rover.forward();

    expect(rover.position).toEqual(new Location(0, 1, CardinalPoints.N));
  });

  it('be walk backward', () => {
    const rover = new Rover();
    rover.backward();

    expect(rover.position).toEqual(new Location(0, -1, CardinalPoints.N));
  });

  it('be rotate right', () => {
    const rover = new Rover();
    rover.turnRight();

    expect(rover.position).toEqual(new Location(0, 0, CardinalPoints.E));
  });


});