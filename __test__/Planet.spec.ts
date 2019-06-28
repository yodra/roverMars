import { Planet } from '../src/Planet';

describe('The planet should be', () => {
    it('exists', () => {
        expect(new Planet(25, 25)).toBeDefined()
    });
  
  });