export enum Color { 
  Red, Green, Blue
}

type Position = {
  x: number
  y: number
  z: number
}

type Colorable = {
  color: Color
}

type ShapeProperties = {
  height: number
  width: number
  length: number
} & Position & Colorable

type RectangleProps = Pick<ShapeProperties, 'height' | 'width'> & Partial<Colorable> & {
  name?: string
}
export class Rectangle {
  name: string
  color?: Color
  height: number
  width: number

  get isSquare(): boolean {
    return this.height == this.width
  }

  constructor({ height, width, color, name = "Mr. Rectangle" }: RectangleProps) {
    this.height = height
    this.width = width
    this.color = color
    this.name = name
  }

  static encapsulates(rectangles: Rectangle[]) {
    const height = rectangles.reduce((sum, rectangle) => {
      return sum + rectangle.height
    }, 0)
    const width = rectangles.reduce((sum, rectangle) => {
      return sum + rectangle.width
    }, 0)
    return new Rectangle({ height, width })
  }

  grow() {
    this.width++
    this.height++
    return this
  }

  toString () {
    return `${this.name}\n` + ('X'.repeat(this.width) + '\n').repeat(this.height) + (this.isSquare ? 'SQUARE!' : 'COOL!')
  }
}

function isNumber(x: any): x is number {
  return typeof x === "number";
}
export class Square extends Rectangle {
  constructor(size: number | Rectangle) {
    if (isNumber(size)) {
      super({ height: size, width: size })
    } else {
      const averageSize = size.height / size.width
      super({ 
        height: averageSize, 
        width: averageSize
      })
    }
  }
}

export function logWithColor(color?: Color) {
  switch(color) {
    case Color.Red: return "\x1b[31m%s\x1b[0m"
    case Color.Blue: return "\x1b[34m%s\x1b[0m"
    case Color.Green: return "\x1b[32m%s\x1b[0m"
    default: return "%s"
  }
}
