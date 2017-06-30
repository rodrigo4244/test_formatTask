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
    const setup = ({ isCompl = true, channelId = 'C024BE7LR', nam = 'task One' } = {}) => ({      
        isCompleted() { return isCompl },
        slackChannelId: channelId,
        name: nam,
    })

    it('should generate an EMOJI_WARNING', () => {
      const task = setup({ isCompl: false })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(EMOJI_WARNING), true, 'actual should have included a warning emoji')
    })

    it('shouldn\'t generate an emoji warning', () => {
      const task = setup({ isCompl: true })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(EMOJI_WARNING), false, 'actual shouldn\'t have included the warning emoji')
    })

    it('should generate the channel link', () => {
      const task = setup({ channelId: 'C024BE7LR' })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(task.slackChannelId), true, 'actual should have generated the channel link')
    })

    it('shouldn\'t generate the channel link', () => {
      const task = setup({ channelId: false })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes('false'), false, 'actual is generating a false channel link')
    })

    it('should generate the task name', () => {
      const task = setup({ nam: 'task One' })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(task.name), true, 'actual should generate the task name')
    })

    it('shouldn\'t generate the task name', () => {
      const task = setup({ nam: false })

      const actual = formatTask(task)

      assert.strictEqual(actual.includes('false'), false, 'actual is generating a false task name')
    })
  })
})
