# The Rectangle

To start we're going to look at defining a `Rectangle` class in Typescript and Javascript. The goal here is to evaluate the self documenting benefits of Typescript when compared to the equivalent Javascript code. 

- Equivalent intellisense using JSDocs vs TS

### Javascript

```js
class Rectangle {
  /**
   * @type {number}
   */
  height
  /**
   * @type {number}
   */
  width 
  /**
   * @param {number} height
   * @param {number} width
   * @return {Rectangle}
   * @api private
  */
  constructor(height, width) {
    this.height = height
    this.width = width
  }

  toString () {
    return ('X'.repeat(this.width) + '\n').repeat(this.height)
  }
}

module.exports = {
  Rectangle
}
```

```js
const Rectangle = require('./Manager').Rectangle

const rectangle = new Rectangle(3, 5)

console.log(rectangle.toString())
```

## Getting Started with Typescript

- Install `yarn add typescript`.
- Add build script `tsc` that calls the typescript compiler.
- The compile step is controlled by the [`tsconfig.json`](../tsconfig.json) file that applies to the `.ts` file.

### Typescript

- We can start with the exact same JS code.
- Type the fields and parameters.

```ts
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
```

Compared to the Javascript it's less lines. The types are defined in line because the are part of the syntax.

```ts
import { Rectangle } from './Rectangle'

const rectangle = new Rectangle(5, 10);

console.log(rectangle.toString())
```

First build: `yarn build`. [Built file](../build/Rectangle.js).
- No actual type-checking is occurring in the Javascript code
- Types are checked at compile time. Try using a string and see what happens.

## Other Basic Types

`string` and `boolean`

```ts
export class Rectangle {
  name: string = "Mr. Rectangle"
  get isSquare(): boolean {
    return this.height == this.width
  }
  // ...
  toString () {
    return `${this.name}\n` + ('X'.repeat(this.width) + '\n').repeat(this.height) + (this.isSquare ? 'SQUARE!' : 'COOL!')
  }
}
```

Arrays defined as `Type[]` or `Array<Type>`

```ts
static encapsulates(rectangles: Rectangle[]) {
  const height = rectangles.reduce((sum, rectangle) => {
    return sum + rectangle.height
  }, 0)
  const width = rectangles.reduce((sum, rectangle) => {
    return sum + rectangle.width
  }, 0)
  return new Rectangle(height, width)
}
```

Tuples 

```ts
  static fetch(id: string):[boolean, Error | undefined, Rectangle | undefined] {
    const [ loading, setLoading ] = useState<boolean>(true)
    const [ error, setError ] = useState<Error | undefined>(undefined)
    const [ result, setResult ] = useState<Rectangle | undefined>(undefined)

    useEffect(() => {
      try {
        const square = await fetch('http://rectangles.com/'+id)
        setResult(square)
        setLoading(false)
      } catch (e) {
        setError(e)
      }
    })
    return [loading, error, result]
  }
```

Enum

```ts
enum Color { 
  Red, Green, Blue
}

// export class Rectangle {
  color: Color = Color.Red
//...

export function logWithColor(color: Color) {
  switch(color) {
    case Color.Red: return "\x1b[31m%s\x1b[0m"
    case Color.Blue: return "\x1b[34m%s\x1b[0m"
    case Color.Green: return "\x1b[32m%s\x1b[0m"
  }
}

// index.ts
console.log(logWithColor(rectangle.color), rectangle.toString())
```

`void`

Explicitly set the return type to void.

```ts
  grow():void {
    this.width++
    this.height++
  }
```

The void here is not necessary.

## Notes

- `return ('X'.repeat(this.width) + '\n').repeat(this.height)` fun right :)
- This example was lifted directly from [Javascript's official documentation on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
- `Array<Type>` this is the first time we're seeing generics.