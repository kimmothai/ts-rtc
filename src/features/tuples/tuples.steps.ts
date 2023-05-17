import {
  Tuple,
  Point,
  Vector,
  magnitude,
  normalize,
  dot,
  cross
} from './tuples'

describe('Tuples, Vectors, and Points', () => {
  let a: Tuple
  let b: Tuple
  let p: Tuple
  let v: Tuple

  // For calculations
  let a1: Tuple
  let a2: Tuple
  let a3: Tuple
  beforeEach(() => {
    a = new Tuple(4.3, -4.2, 3.1, 1.0)
    b = new Tuple(4.3, -4.2, 3.1, 0.0)
    p = new Point(4, -4, 3)
    v = new Vector(4, -4, 3)
    a1 = new Tuple(3, -2, 5, 1)
    a2 = new Tuple(-2, 3, 1, 0)
    a3 = new Tuple(1, -2, 3, -4)
  })
  test('A tuple with w=1.0 is a point', () => {
    expect(a.x).toEqual(4.3)
    expect(a.y).toEqual(-4.2)
    expect(a.z).toEqual(3.1)
    expect(a.w).toEqual(1.0)
    expect(a.isPoint()).toEqual(true)
    expect(a.isVector()).not.toEqual(true)
  })
  test('A tuple with w=0 is a vector', () => {
    expect(b.x).toEqual(4.3)
    expect(b.y).toEqual(-4.2)
    expect(b.z).toEqual(3.1)
    expect(b.w).toEqual(0.0)
    expect(b.isPoint()).not.toEqual(true)
    expect(b.isVector()).toEqual(true)
  })
  test('point() creates tuples with w=1', () => {
    expect(p).toEqual(new Tuple(4, -4, 3, 1))
  })
  test('vector() creates tuples with w=0', () => {
    expect(v).toEqual(new Tuple(4, -4, 3, 0))
  })
  test('Tuple.isDuplicate() compares equality', () => {
    expect(a.isDuplicate(new Tuple(1, 2, 3, 1))).toBeTruthy
    expect(a.isDuplicate(new Tuple(1, 2, 3, 0))).toBeFalsy
  })
  test('Adding two tuples', () => {
    expect(a1.add(a2)).toEqual(new Tuple(1, 1, 6, 1))
  })

  test('Subtracting two points', () => {
    expect(new Point(3, 2, 1).subtract(new Point(5, 6, 7))).toEqual(
      new Vector(-2, -4, -6)
    )
  })

  test('Subtracting a vector from a point', () => {
    expect(new Point(3, 2, 1).subtract(new Vector(5, 6, 7))).toEqual(
      new Point(-2, -4, -6)
    )
  })

  test('Subtracting two vectors', () => {
    expect(new Vector(3, 2, 1).subtract(new Vector(5, 6, 7))).toEqual(
      new Vector(-2, -4, -6)
    )
  })

  test('Subtracting a vector from the zero vector', () => {
    let zero = new Vector(0, 0, 0)
    let v = new Vector(1, -2, 3)
    expect(zero.subtract(v)).toEqual(new Vector(-1, 2, -3))
  })

  test('Negating a tuple', () => {
    let negateA = new Tuple(-1, 2, -3, 4)
    expect(a3.negate()).toEqual(negateA)
  })

  test('Multiplying a tuple by a scalar', () => {
    expect(a3.multiply(3.5)).toEqual(new Tuple(3.5, -7, 10.5, -14))
  })

  test('Multiplying a tuple by a fraction', () => {
    expect(a3.multiply(0.5)).toEqual(new Tuple(0.5, -1, 1.5, -2))
  })

  test('Dividing a tuple by a scalar', () => {
    expect(a3.divide(2)).toEqual(new Tuple(0.5, -1, 1.5, -2))
  })

  test('Computing the magnitude of vector(1, 0, 0)', () => {
    let mv = new Vector(1, 0, 0)
    expect(magnitude(mv)).toEqual(1)
  })

  test('Computing the magnitude of vector(0, 1, 0)', () => {
    let mv = new Vector(0, 1, 0)
    expect(magnitude(mv)).toEqual(1)
  })

  test('Computing the magnitude of vector(0, 0, 1)', () => {
    let mv = new Vector(0, 0, 1)
    expect(magnitude(mv)).toEqual(1)
  })

  test('Computing the magnitude of vector(-1, -2, -3)', () => {
    let mv = new Vector(-1, -2, -3)
    expect(magnitude(mv)).toEqual(Math.sqrt(14))
  })

  test('Normalizing vector(4, 0, 0) gives (1, 0, 0)', () => {
    let v = new Vector(4, 0, 0)
    expect(normalize(v)).toEqual(new Vector(1, 0, 0))
  })

  test('Normalizing vector(1, 2, 3)', () => {
    let v = new Vector(1, 2, 3)
    let sqr = Math.sqrt(14)
    let arg1 = 1 / sqr // 0.26726
    let arg2 = 2 / sqr // 0.53452
    let arg3 = 3 / sqr // 0.80178
    expect(normalize(v)).toEqual(new Vector(arg1, arg2, arg3))
  })

  test('The magnitude of a normalized vector', () => {
    let v = new Vector(1, 2, 3)
    let norm = normalize(v)
    expect(magnitude(norm)).toEqual(1)
  })

  test('The dot product of two tuples', () => {
    let a = new Vector(1, 2, 3)
    let b = new Vector(2, 3, 4)

    expect(dot(a, b)).toEqual(20)
  })

  test('The cross product of two vectors', () => {
    let a = new Vector(1, 2, 3)
    let b = new Vector(2, 3, 4)

    expect(cross(a, b)).toEqual(new Vector(-1, 2, -1))
    expect(cross(b, a)).toEqual(new Vector(1, -2, 1))
  })
})
