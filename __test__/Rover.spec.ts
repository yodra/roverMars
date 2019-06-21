import { CardinalPoints, Rover } from '../src/Rover';
import { Location} from '../src/Location';


describe('The Rover robot should be initial', () => {
  it('location', () => {
    const rover = new Rover();

    expect(rover.location).toEqual(new Location(0, 0));
  });

  it('direction', () => {
    const rover = new Rover();

    expect(rover.direction).toEqual(CardinalPoints.N);
  });

});

describe('The Rover robot should move forward', () => {
  it('in north direction', () => {
    const rover = new Rover();
    rover.forward();

    expect(rover.location).toEqual(new Location(0, 1));
  });

  it('in east direction', () => {
    const rover = new Rover();
    rover.turnRight();
    rover.forward();

    expect(rover.location).toEqual(new Location(1, 0));
  });

  it('in south direction', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.turnLeft();
    rover.forward();

    expect(rover.location).toEqual(new Location(0, -1));
  });

  it('in west direction', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.forward();

    expect(rover.location).toEqual(new Location(-1, 0));
  });

});

describe('The Rover robot should move backward', () => {
  it('in north direction', () => {
    const rover = new Rover();
    rover.backward();

    expect(rover.location).toEqual(new Location(0, -1));
  });

  it('in east direction', () => {
    const rover = new Rover();
    rover.turnRight();
    rover.backward();

    expect(rover.location).toEqual(new Location(-1, 0));
  });

  it('in south direction', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.turnLeft();
    rover.backward();

    expect(rover.location).toEqual(new Location(0, 1));
  });

  it('in west direction', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.backward();

    expect(rover.location).toEqual(new Location(1, 0));
  });

});

describe('The Rover robot should turn right and look', () => {
  it('to east', () => {
    const rover = new Rover();
    rover.turnRight();

    expect(rover.direction).toEqual(CardinalPoints.E);
  });

  it('to south', () => {
    const rover = new Rover();
    rover.turnRight();
    rover.turnRight();

    expect(rover.direction).toEqual(CardinalPoints.S);
  });

  it('to west', () => {
    const rover = new Rover();
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();

    expect(rover.direction).toEqual(CardinalPoints.W);
  });

  it('to north', () => {
    const rover = new Rover();
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();
    rover.turnRight();

    expect(rover.direction).toEqual(CardinalPoints.N);
  });

});

describe('The Rover robot should turn left and look', () => {
  it('to west', () => {
    const rover = new Rover();
    rover.turnLeft();

    expect(rover.direction).toEqual(CardinalPoints.W);
  });

  it('to south', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.turnLeft();

    expect(rover.direction).toEqual(CardinalPoints.S);
  });

  it('to east', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();

    expect(rover.direction).toEqual(CardinalPoints.E);
  });

  it('to north', () => {
    const rover = new Rover();
    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();
    rover.turnLeft();

    expect(rover.direction).toEqual(CardinalPoints.N);
  });

});

describe('The Rover robot should be execute a command', () => {
  it('f -> forward', () => {
    const rover = new Rover();
    rover.execute('f');

    expect(rover.location).toEqual(new Location(0, 1));
  });

  it('b -> backward', () => {
    const rover = new Rover();
    rover.execute('b');

    expect(rover.location).toEqual(new Location(0, -1));
  });

  it('r -> right', () => {
    const rover = new Rover();
    rover.execute('r');

    expect(rover.direction).toEqual(CardinalPoints.E);
  });


  it('l -> left', () => {
    const rover = new Rover();
    rover.execute('l');

    expect(rover.direction).toEqual(CardinalPoints.W);
  });
});

describe('The Rover robot should be execute some commands', () => {
  it('r, r, b -> right, right, backward ', () => {
    const rover = new Rover();
    rover.execute('r', 'r', 'b');


    expect(rover.direction).toEqual(CardinalPoints.S);
    expect(rover.location).toEqual(new Location(0, 1));
  });

  it(' -> right, right, backward ', () => {
    const rover = new Rover();
    rover.execute('r', 'r', 'b', 'r', 'f', 'f', 'f', 'l');


    expect(rover.direction).toEqual(CardinalPoints.S);
    expect(rover.location).toEqual(new Location(-3, 1));
  });

});