import { Obstacle } from "./Obstacle";

export class Planet {
    private width: number
    private height: number
    private obstacles: Obstacle[]

    constructor(width: number, height: number) {
        this.width = width
        this.height = height

        this.obstacles = new Array<Obstacle>()
    }

    
} 