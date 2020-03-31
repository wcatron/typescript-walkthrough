# Interfaces and Generics

For the next walk through we're going to go back to our `Manager` class and create an interface. Once we have that we're going to use generics to strengthen our interface's types.

## Typescript

- Define `RequestHandler` interface and use it.

```ts
// Manager.ts
export interface RequestHandler {
  request(id: string): any
}

export class Manager {
  url: URL
  handler: RequestHandler
  constructor(url: URL, apiKey: string, handler: RequestHandler) {
    this.url = url
    this.url.searchParams.append('apiKey', apiKey)
    this.handler = handler
  }
}

// index.ts
class Handler implements RequestHandler {
  request(id: string) {
    return {
      id,
      ...me // from GQL example
    }
  }
}

const handler = new Handler()

const manager = new Manager(new URL('http://google.com'), 'abc123', handler)

console.log(manager.url.toString())
console.log(manager.handler.request('123'))
```

The interface can be re-written as a type and does not have to be over-defined.

```ts
// Manager.ts
export type RequestHandler = {
  request: (id: string) => any
}

// index.ts
const handler:RequestHandler = {
  request:(id) => id
}
```

## Generics

Now what if we want a more *generic* handler?

- Define a handler that returns a `User` by id.
- Define a handler that returns an array of `Chat`s by user's id.

## Notes

- A simple Rule:

> Use types unless you have to use interfaces.

### For example extending a class:

```ts
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

// Equivalent
interface SelectableControl {
  private state: any;
  select(): void;
}
```
