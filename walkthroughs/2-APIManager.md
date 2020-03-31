# The API Manager

Now we're going to try to create a situation where typescript can help you catch errors at build time that would otherwise result in an error at runtime.

- Create `Manager` class that accepts a url as a string.
- Refactor to use a URL object, and try to make calls on that object.
- Use `any` to bypass the compile time check and cause a run-time error.

Starting with a basic API manager.

### Javascript

```js
class Manager {
  /**
   * @type {string}
   */
  url
  /**
   * 
   * @param {string} url 
   */
  constructor(url) {
    this.url = url
  }
}
module.exports = {
  Manager
}
```

### Typescript

```ts
export class Manager {
  url:string
  constructor(url: string) {
    this.url = url
  }
}
```

Usage:

```ts
import { Manager } from './Manager'

const manager = new Manager('http://google.com')

console.log(manager.url)
```

### Javascript

```js
class Manager {
  /**
   * @type {URL}
   */
  url
  /**
   * @param {URL} url 
   * @param {string} apiKey 
   */
  constructor(url, apiKey) {
    this.url = url
    this.url.searchParams.append('apiKey', apiKey)
  }
}

module.exports = {
  Manager
}
```

### Typescript

```ts
export class Manager {
  url:URL
  constructor(url: URL, apiKey: string) {
    this.url = url
    this.url.searchParams.append('apiKey', apiKey)
  }
}
```

Usage:

```ts
import { Manager } from './Manager'

const manager = new Manager(new URL('http://google.com'), 'abc123')

console.log(manager.url.toString())
```