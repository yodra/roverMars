import { Location } from '../src/Location';

describe('The location should be', () => {
    it('exists', () => {
        expect(new Location(0, 0)).toBeDefined()
    });

    it('increment in axis X', () => {
        const location = new Location(0, 0);
        location.incrementX()
        expect(location).toEqual(new Location(1, 0))
    });

    it('increment in axis Y', () => {
        const location = new Location(0, 0);
        location.incrementY()
        expect(location).toEqual(new Location(0, 1))
    });

    it('decrement in axis X', () => {
        const location = new Location(0, 0);
        location.decrementX()
        expect(location).toEqual(new Location(-1, 0))
    });

    it('decrement in axis Y', () => {
        const location = new Location(0, 0);
        location.decrementY()
        expect(location).toEqual(new Location(0, -1))
    });

  
  });