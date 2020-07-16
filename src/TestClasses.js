import React from 'react'



const Rectangle = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    area() {
        return this.x * this.y;
    }
}

export default Rectangle;