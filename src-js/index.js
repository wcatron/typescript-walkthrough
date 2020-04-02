// Add here during walkthroughs.
const Manager = require('./Manager').Manager

const manager = new Manager(new URL('http://google.com'), 'apiKey')

console.log(manager.url.toString())