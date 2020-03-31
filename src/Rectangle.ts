// Rectangle.ts
export class Rectangle {
  width: number
  height: number
  constructor(height: number, width: number) {
    this.height = height
    this.width = width
  }

  toString () {
    return ('X'.repeat(this.width) + '\n').repeat(this.height)
  }
}