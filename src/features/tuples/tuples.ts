// interface Tuples {
//   x: number
//   y: number
//   z: number
//   w: number
// }

// W is an arbitrary name by the Ray tracer challenge book to identify vectors (0) and points (1)
type W = 0 | 1

export class Tuple {
  x: number
  y: number
  z: number
  w: number
  constructor(x: number, y: number, z: number, w: number) {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
  }

  // Check the point value
  isPoint() {
    if (this.w !== 0) {
      return true
    }
    return false
  }

  isVector() {
    if (this.w === 0) {
      return true
    }
    return false
  }

  isDuplicate(compareTo: Tuple) {
    let selfTuple = { x: this.x, y: this.y, z: this.z, w: this.w }
    if (selfTuple === compareTo) {
      return true
    }
    return false
  }

  add(tuple: Tuple) {
    // TODO - add a check that tuple is instanceOf Tuple
    return {
      x: this.x + tuple.x,
      y: this.y + tuple.y,
      z: this.z + tuple.z,
      w: this.w + tuple.w
    }
  }

  subtract(tuple: Tuple) {
    // TODO - add a check that tuple is instanceOf Tuple
    return {
      x: this.x - tuple.x,
      y: this.y - tuple.y,
      z: this.z - tuple.z,
      w: this.w - tuple.w
    }
  }

  negate() {
    return {
      x: -this.x,
      y: -this.y,
      z: -this.z,
      w: -this.w
    }
  }

  multiply(scalar: number) {
    return {
      x: this.x * scalar,
      y: this.y * scalar,
      z: this.z * scalar,
      w: this.w * scalar
    }
  }

  divide(scalar: number) {
    return {
      x: this.x / scalar,
      y: this.y / scalar,
      z: this.z / scalar,
      w: this.w / scalar
    }
  }
}

export class Point extends Tuple {
  x: number
  y: number
  z: number
  constructor(x: number, y: number, z: number, w: number = 1) {
    super(x, y, z, w)
    this.x = x
    this.y = y
    this.z = z
    this.w = 1
  }
}

export class Vector extends Tuple {
  x: number
  y: number
  z: number
  constructor(x: number, y: number, z: number, w: number = 0) {
    super(x, y, z, w)
    this.x = x
    this.y = y
    this.z = z
    this.w = 0
  }

  // magnitude(): number {
  //   return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2 + this.w ** 2)
  // }

  // normalize() {
  //   const m = this.
  // }
}

export function magnitude(vector: Tuple): number {
  return Math.sqrt(
    vector.x ** 2 + vector.y ** 2 + vector.z ** 2 + vector.w ** 2
  )
}

export function normalize(vector: Tuple): Tuple {
  let m = magnitude(vector)
  return new Tuple(vector.x / m, vector.y / m, vector.z / m, vector.w / m)
}

export function dot(vectorA: Tuple, vectorB: Tuple): number {
  return (
    vectorA.x * vectorB.x +
    vectorA.y * vectorB.y +
    vectorA.z * vectorB.z +
    vectorA.w * vectorB.w
  )
}

export function cross(vectorA: Tuple, vectorB: Tuple): Tuple {
  return new Vector(
    vectorA.y * vectorB.z - vectorA.z * vectorB.y,
    vectorA.z * vectorB.x - vectorA.x * vectorB.z,
    vectorA.x * vectorB.y - vectorA.y * vectorB.x
  )
}
