'use strict'

const assert = require('assert')

const {
  EMOJI_WARNING,
  userLinkDisplay,
  formatTask,
} = require('..')

describe('format', () => {
  describe('userLinkDisplay', () => {
    it('should generate the user link for display', () => {
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
    const setup = ({ isCompl = true, channelId = 'C024BE7LR', name = 'task One' } = {}) => ({
      isCompleted() { return isCompl },
      slackChannelId: channelId,
      name,
    })

    it('should generate an emoji warning for incomplete tasks', () => {
      const task = setup({ isCompl: false })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(EMOJI_WARNING), true, 'actual should have included a warning emoji')
    })

    it('should not generate an emoji warning for complete tasks', () => {
      const task = setup({ isCompl: true })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(EMOJI_WARNING), false, 'actual should not have included the warning emoji')
    })

    it('should generate the slack channel link for a valid channelId', () => {
      const task = setup({ channelId: 'C024BE7LR' })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(task.slackChannelId), true, 'actual should generate a valid slack channel link')
    })

    it('should not generate the slack channel link for an invalid channelId', () => {
      const task = setup({ channelId: false })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes('false'), false, 'actual is generating an invalid slack channel link')
    })

    it('should generate the task name for a valid name', () => {
      const task = setup({ name: 'task One' })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(task.name), true, 'actual should generate a valid task name')
    })

    it('should not generate the task name for an invalid name', () => {
      const task = setup({ name: false })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes('false'), false, 'actual is generating an invalid task name')
    })
  })
})
