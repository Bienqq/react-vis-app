import * as Math from 'mathjs'
import {range} from 'underscore'

class MathParser {

    constructor(formula, start, stop, step) {
        this.parser = Math.parser();
        this.parser.evaluate(formula);
        this.x = range(start, stop, step);
        this.y = range(start, stop, step);
        this.z = [];
    }

    async evaluate() {
        for (let x of this.x) {
            const temp = [];
            for (let y of this.y) {
                const z = this.parser.evaluate(`f(${x},${y})`);
                temp.push(z)
            }
            this.z.push(temp);
        }
        return {
            x: this.x,
            y: this.y,
            z: this.z
        }

    }
}

export default MathParser;