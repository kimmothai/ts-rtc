import { Tuple, Point } from './src/features/tuples/tuples'

const t = new Tuple(1, 2, 3, 1.0)
const a = new Point(1, 2, 3)
console.log(a instanceof Tuple)
