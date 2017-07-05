'use strict'

const assert = require('assert')

const {
  WARNING_EMOJI,
  channelLink,
  userLinkDisplay,
  formatTask,
} = require('..')

describe('format', () => {
  describe('userLinkDisplay', () => {
    it('should return a string with the user link for display', () => {
      const username = 'rodrigo'
      const user = { username }

      const userLink = userLinkDisplay(user)

      assert.strictEqual(`@${username}`, userLink)
    })

    it('should return None when user doesn\'t exist', () => {
      const userLink = userLinkDisplay()

      assert.strictEqual('None', userLink)
    })
  })

  describe('formatTask', () => {
    const setup = ({ isCompleted = true, channelId = 'C024BE7LR', name = 'task One' } = {}) => ({
      isCompleted() { return isCompleted },
      slackChannelId: channelId,
      name,
    })

    it('should return a string with a warning emoji for incomplete tasks', () => {
      const task = setup({ isCompleted: false })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(WARNING_EMOJI), true, 'actual did not include a warning emoji')
    })

    it('should not return a string with a warning emoji for complete tasks', () => {
      const task = setup({ isCompleted: true })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(WARNING_EMOJI), false, 'actual did include a warning emoji')
    })

    it('should return a string with the task name', () => {
      const task = setup({ name: 'task One' })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(task.name), true, 'actual did not return a string with the task name')
    })

    it('should not return the task name', () => {
      const task = setup({ name: false })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes('false'), false, 'actual did return a task name with false included')
    })
  })

  describe('channelLink', () => {
    const setup = ({ slackChannelId = 'C024BE7LR', display = '' } = {}) => ({
      slackChannelId,
      display,
    })

    it('should return a string with the slack channel link for the provided channelId', () => {
      const task = setup({ slackChannelId: 'C024BE7BR' })

      const actual = channelLink(task.slackChannelId, task.display)

      assert.strictEqual(actual.includes(task.slackChannelId), true, 'actual did not included a string with a slack channel link')
    })

    it('should not return the slack channel link with false appended', () => {
      const task = setup({ slackChannelId: false })

      const actual = channelLink(task.slackChannelId, task.display)

      assert.strictEqual(actual.includes('false'), false, 'actual did return a slack channel link with false appended')
    })

    it('should return the slack channel link with the display string', () => {
      const task = setup({ display: '142' })

      const actual = channelLink(task.slackChannelId, task.display)

      assert.strictEqual(actual.includes(task.display), true, 'actual did return a slack channel link without the display string')
    })
  })
})
