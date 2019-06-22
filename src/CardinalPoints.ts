import { Location } from './Location'

export interface CardinalPointImpl {
    name: string
    next(): CardinalPoint
    previous(): CardinalPoint
    forward(): Location
    backward(): Location
}

class CardinalPoint {
    public location: Location

    constructor(location?: Location) {
        this.location = location || new Location(0, 0)
    }

    static equals = (cardinalPointA: CardinalPoint, cardinalPointB: CardinalPoint): Boolean => {
        return JSON.stringify(cardinalPointA) === JSON.stringify(cardinalPointB)
    } 
}

class North extends CardinalPoint implements CardinalPointImpl {
    name = "North"

    next = (): CardinalPoint => {
        return new East(this.location)
    }

    previous = (): CardinalPoint => {
        return new West(this.location)
    }

    forward = (): Location => {
        this.location.incrementY();
        return this.location
    }

    backward = (): Location => {
        this.location.decrementY();
        return this.location
    }
}

class East extends CardinalPoint implements CardinalPointImpl {
    name = "East"

    next = (): CardinalPoint => {
        return new South(this.location)
    }

    previous = (): CardinalPoint => {
        return new North(this.location)
    }

    forward = (): Location => {
        this.location.incrementX();
        return this.location
    }

    backward = (): Location => {
        this.location.decrementX();
        return this.location
    }
}

class South extends CardinalPoint implements CardinalPointImpl {
    name = "South"

    next = (): CardinalPoint => {
        return new West(this.location)
    }

    previous = (): CardinalPoint => {
        return new East(this.location)
    }

    forward = (): Location => {
        this.location.decrementY();
        return this.location
    }

    backward = (): Location => {
        this.location.incrementY();
        return this.location
    }
}

class West extends CardinalPoint implements CardinalPointImpl {
    name = "West"

    next = (): CardinalPoint => {
        return new North(this.location)
    }

    previous = (): CardinalPoint => {
        return new South(this.location)
    }

    forward = (): Location => {
        this.location.decrementX();
        return this.location
    }

    backward = (): Location => {
        this.location.incrementX();
        return this.location
    }
}

export { North, East, South, West }