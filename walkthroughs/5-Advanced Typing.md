# Advanced Typing

```ts
// Rectangle.ts
type ShapeProperties = {
  height: number
  width: number
  length: number
  x: number
  y: number
  z: number
}

export class Rectangle {
  width: number
  height: number
  constructor({ height, width }: ShapeProperties) {
    this.height = height
    this.width = width
  }

  toString () {
    return ('X'.repeat(this.width) + '\n').repeat(this.height)
  }
}

// index.ts
import { Rectangle } from "./Rectangle";

const rectangle = new Rectangle({
  width: 5, 
  height: 10,
  length: 0,
  x: 0,
  y: 0,
  z: 0
});

console.log(rectangle.toString())
```

## Pick

```ts
type RectangleProps = Pick<ShapeProperties, 'width' | 'height'>

// index.ts
const rectangle = new Rectangle({
  width: 5, 
  height: 10
});
```

## Omit

```ts
type RectangleProps = Omit<ShapeProperties, 'length' | 'x' | 'y'>
```

## Required

```ts
export type ShapeProperties = {
  height?: number
  width?: number
  length?: number
  x?: number
  y?: number
  z?: number
}

type RectangleProps = Required<Pick<ShapeProperties, 'height' | 'width'>>
```

## Union

```ts
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
```

## Intersection

```ts
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
```

## Null and undefined

Example of undefined
```ts
type RectangleProps = Pick<ShapeProperties, 'height' | 'width'> & Partial<Colorable>

// ...
color?: Color
// ...
```

null is also available
```ts
// ...
color?: Color | null
// ...
```

- `null !== undefined`
