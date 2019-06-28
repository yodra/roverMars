import { Rover } from '../src/Rover';
import { North, East, South, West } from '../src/CardinalPoints';
import { Location } from '../src/Location';

class RoverTest extends Rover {
  static GenerateLookingEast(): Rover {
    const rover = new Rover()
    rover.direction = new East();
    return rover
  }
  static GenerateLookingSouth(): Rover {
    const rover = new Rover()
    rover.direction = new South();
    return rover
  }
  static GenerateLookingWest(): Rover {
    const rover = new Rover()
    rover.direction = new West();
    return rover
  }
}

describe('The Rover robot should be initial', () => {
  const rover = new Rover();

  it('exists', () => {
    expect(rover).toBeDefined();
  });

  it('location', () => {
    expect(rover.location).toEqual(new Location(0, 0));
  });

  it('direction', () => {
    expect(rover.direction.name).toEqual(new North().name);
  });

});

describe('The Rover robot should turn right and look', () => {
  const rover = new Rover();

  it('to east', () => {
    rover.turnRight();

    expect(rover.direction.name).toEqual(new East().name);
  });

  it('to south', () => {
    rover.turnRight();

    expect(rover.direction.name).toEqual(new South().name);
  });

  it('to west', () => {
    rover.turnRight();

    expect(rover.direction.name).toEqual(new West().name);
  });

  it('to north', () => {
    rover.turnRight();

    expect(rover.direction.name).toEqual(new North().name);
  });

});

describe('The Rover robot should turn left and look', () => {
  const rover = new Rover();

  it('to west', () => {
    rover.turnLeft();

    expect(rover.direction.name).toEqual(new West().name);
  });

  it('to south', () => {
    rover.turnLeft();

    expect(rover.direction.name).toEqual(new South().name);
  });

  it('to east', () => {
    rover.turnLeft();

    expect(rover.direction.name).toEqual(new East().name);
  });

  it('to north', () => {
    rover.turnLeft();

    expect(rover.direction.name).toEqual(new North().name);
  });

});

describe('The Rover robot should move forward', () => {
  it('in north direction', () => {
    const rover = new Rover();
    rover.forward();

    expect(rover.location).toEqual(new Location(0, 1));
  });

  it('in east direction', () => {
    const rover = RoverTest.GenerateLookingEast()
    rover.forward();

    expect(rover.location).toEqual(new Location(1, 0));
  });

  it('in south direction', () => {
    const rover = RoverTest.GenerateLookingSouth()
    rover.forward();

    expect(rover.location).toEqual(new Location(0, -1));
  });

  it('in west direction', () => {
    const rover = RoverTest.GenerateLookingWest()
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
    const rover = RoverTest.GenerateLookingEast()
    rover.backward();

    expect(rover.location).toEqual(new Location(-1, 0));
  });

  it('in south direction', () => {
    const rover = RoverTest.GenerateLookingSouth()
    rover.backward();

    expect(rover.location).toEqual(new Location(0, 1));
  });

  it('in west direction', () => {
    const rover = RoverTest.GenerateLookingWest()
    rover.backward();

    expect(rover.location).toEqual(new Location(1, 0));
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

    expect(rover.direction.name).toEqual(new East().name);
  });

  it('l -> left', () => {
    const rover = new Rover();
    rover.execute('l');

    expect(rover.direction.name).toEqual(new West().name);
  });
});

describe('The Rover robot should be execute some commands', () => {
  it('r, r, b -> right, right, backward ', () => {
    const rover = new Rover();
    rover.execute('r', 'r', 'b');

    expect(rover.direction.name).toEqual(new South().name);
    expect(rover.location).toEqual(new Location(0, 1));
  });
});