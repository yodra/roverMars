import { Rover } from '../src/Rover';
import { Terminal } from '../src/Terminal';
import { Location } from '../src/Location';

describe('The terminal should be process commands and', () => {
    const rover = new Rover()
    const terminal = new Terminal(rover)
    
    const command = "f"
    
    it('help', () => {
        expect(terminal.process(command).help()).toEqual("The robot move to front");
    });

    it('execute', () => {
        terminal.process(command).execute()
        rover.forward()

        expect(rover.location).toEqual(new Location(0, 2));
    });
  
  });