'use strict'

const {
  compact,
  flow,
  get,
  join,
} = require('lodash/fp')

const WARNING_EMOJI = ':warning: '

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
    task.isCompleted() ? '' : WARNING_EMOJI,
    task.slackChannelId ? channelLink(task.slackChannelId) : '',
    task.name,
  ])
}

module.exports = {
  WARNING_EMOJI,
  channelLink,
  formatTask,
  userLinkDisplay,
}
