import { Rectangle, logWithColor, Color } from './Rectangle'

const rectangle = new Rectangle({
  name: 'Square',
  height: 1,
  width: 1,
  color: Color.Red
})

rectangle.grow()

console.log(logWithColor(rectangle.color), rectangle.toString())
