import { Rover } from "./Rover";

export class Terminal {
    private rover: Rover

    constructor (rover: Rover) {
        this.rover = rover
    }

    process = (command: string) => { 
        return this.translate(command)
    }

    private translate = (command: string) => {
        switch (command) {
            case 'f': return {
                execute: this.rover.forward,
                help: () => "The robot move to front"
            }
            case 'b': return {
                execute: this.rover.backward,
                help: () => "The robot move to front"
            }
            case 'r': return {
                execute: this.rover.turnRight,
                help: () => "The robot move to front"
            }
            case 'l': return {
                execute: this.rover.turnLeft,
                help: () => "The robot move to front"
            }
            default: throw "Command not found"
        }
    }
}