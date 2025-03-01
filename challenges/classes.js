// 1. Copy and paste your prototype in here and refactor into class syntax.

function CuboidMaker(atts) {
    this.length = atts.length,
    this.width = atts.width,
    this.height = atts.height
  }

// Refactored Prototype

class CuboidMaker {
    constructor(atts) {
        this.length = atts.length,
        this.width = atts.width,
        this.height = atts.height
    }

    volume () {
        return this.length * this.width * this.height
    }

    surfaceArea () {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

class CubeMaker extends CuboidMaker {
    constructor(cubeAtts) {
        super(cubeAtts)
    }

    cubeVolume () {
        return this.length * this.length * this.length
    }

    cubeSurfaceArea () {
        return 6 * (this.length * this.length)
    }
}

// New Object

const cuboid = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cuboid.cubeVolume()); // 64
console.log(cuboid.cubeSurfaceArea()); // 96

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension 
// properties from CuboidMaker. Test your work by logging out your volume and surface area.