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
            case 'f': 
                return this.generate(this.rover.forward, "move to front")
            case 'b': 
                return this.generate(this.rover.backward, "move to back")
            case 'r': 
                return this.generate(this.rover.turnRight, "turn right 90 degrees") 
            case 'l': 
                return this.generate(this.rover.turnLeft, "turn left 90 degrees") 
            default: 
                throw "Command not found"
        }
    }

    private generate = (action: any, helpInfo: String) => {
        return {
            execute: action,
            help: () => "The robot " + helpInfo.toLowerCase()
        }
    }
}