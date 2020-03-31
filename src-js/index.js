const Manager = require('./Manager').Manager

const manager = new Manager(new URL('http://google.com'), 'abc123')

console.log(manager.url.toString())
