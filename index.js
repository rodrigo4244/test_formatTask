'use strict'

const {
  compact,
  flow,
  get,
  join,
} = require('lodash/fp')

/**
 * Returns a formatted link to a channel for use with the Slack API
 * @method channelLink
 * @param {String} slackChannelId - format is like C024BE7LR
 * @param {String} display - optional readable name
 * @return {String} - The link to the channel formatted for Slack API
 */

function channelLink(slackChannelId, display) {
  if (display) return `<#${slackChannelId}|${display}>`
  return `<#${slackChannelId}>`
}

function userLinkDisplay(user) {
  if (get('username')(user)) return `@${user.username}`
  if (user) return `@${user}`
  return 'None'
}

function formatTask(task) {
  const cleanJoin = flow(compact, join(' '))
  return cleanJoin([
    task.isCompleted() ? '' : ':warning: ',
    task.slackChannelId ? channelLink(task.slackChannelId) : '',
    task.name,
  ])
}

module.exports = {
  formatTask,
  userLinkDisplay,
}



/*
let task = {
    isCompleted: true,
    slackChannelId: 'C024BE7LR',
    name: 'taskOne',
}

console.log(typeof task.isCompleted)
console.log(typeof task.slackChannelId)
console.log(typeof task.name)

function square(n) {
return n * n;
}

var addSquare = flow([add, square]);
console.log(addSquare(5,2));
// => 25

let lemons = false;
(lemons) ? console.log("please give me a lemonade") : console.log("then give me a beer");

function channelLink(slackChannelId, display) {
  if (display) return `<#${slackChannelId}|${display}>`
  return `<#${slackChannelId}>`
}

console.log(channelLink('C024BE7LR'))
*/

