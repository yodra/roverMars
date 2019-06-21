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

    expect(rover.location).toEqual(new Location(0, 0));
  });


});
