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
   * Normalize the given `type`, for example "html" becomes "text/html".
   *
   * @param {number} height
   * @param {number} width
   * @return {Rectangle}
   * @api private
  */
  constructor(height, width) {
    this.height = Math.floor(Math.abs(height))
    this.width = Math.floor(Math.abs(width))
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

### Typescript

- We can start with the exact same JS code.
- Type fields.

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

```ts
import { Rectangle } from './Rectangle'

const rectangle = new Rectangle(5, 10);

console.log(rectangle.toString())
```

## Notes

- `return ('X'.repeat(this.width) + '\n').repeat(this.height)` that code chunk is the reason we have 
- This example was lifted directly from [Javascript's official documentation on classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).