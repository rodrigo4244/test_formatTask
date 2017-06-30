'use strict'

const {
  flow,
  add,
} = require('lodash/fp')

const task = {
  isCompleted: true,
  slackChannelId: 'C024BE7LR',
  name: 'taskOne',
}

console.log(typeof task.isCompleted)
console.log(typeof task.slackChannelId)
console.log(typeof task.name)

function square(n) {
  return n * n
}

const addSquare = flow([add, square])
console.log(addSquare(5, 2))
// => 25

const lemons = false;
(lemons) ? console.log('please give me a lemonade') : console.log('then give me a beer')

function channelLink(slackChannelId, display) {
  if (display) return `<#${slackChannelId}|${display}>`
  return `<#${slackChannelId}>`
}

console.log(channelLink('C024BE7LR'))

const a = () => square(2) + 1 // example of arrow function.
console.log(a())

const username = 'rodrigo'
const user = { username }
console.log(user)

function foo() {
  return 42
}

foo.bar = 'hello world'
foo.gcg = 'Gunar Cassiano Gessner'

console.log(foo)

const b = 3.14159

console.log(b.toFixed(4), typeof b.toFixed(4), b, typeof b)

const c = `<#${false}>`

console.log(c)
