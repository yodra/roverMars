import { Rover } from '../src/Rover';
import { Terminal } from '../src/Terminal';
import { Location } from '../src/Location';

describe('The terminal should be process commands and', () => {
    const rover = new Rover()
    const terminal = new Terminal(rover)
    
    it('help', () => {
        const command = "f"
        const expectHelp = "The robot move to front"
        expect(terminal.process(command).help()).toEqual(expectHelp);
    });

    it('execute', () => {
        const command = "f"

        terminal.process(command).execute()
        rover.forward()

        expect(rover.location).toEqual(new Location(0, 2));
    });
  
  });