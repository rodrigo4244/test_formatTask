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
    const setup = (isCompl, channelId, nam) => ({
      isCompleted() { return isCompl },
      slackChannelId: channelId,
      name: nam,
    })

    it('Should generate EMOJI_WARNING', () => {
      const task = setup(false, 'C024BE7LR', 'task One')

      const actual = formatTask(task)

      assert.strictEqual(actual.includes(EMOJI_WARNING), true, 'actual should have included a warning emoji')
    })

    it('Shouldn\'t generate the emoji warning', () => {
      const task = setup(true, 'C024BE7LR', 'task One')
      
      const actual = formatTask(task)

      assert.strictEqual(actual.includes(EMOJI_WARNING), false, 'actual should\'t have included the warning emoji')
    })
      
    it('Should generate the channel link', () => {
      const task = setup(false, 'C024BE7LR', 'task One')
      
      const actual = formatTask(task)
      //':warning: ' + ' ' + `${task.name}`
      assert.strictEqual(actual.includes(task.slackChannelId), true, 'actual should have generated the channel link')
    })

    it('Shouldn\'t generate the channel link', () => {
      const task = setup(false, false, 'task One')
      
      const actual = formatTask(task)

      assert.strictEqual(actual.includes('false'), false, 'actual is generating a false channel link')
    })

    it('Should generate the task name', () => {
      const task = setup(false, 'C024BE7LR', 'task One')
      
      const actual = formatTask(task)
      
      assert.strictEqual(actual.includes(task.name), true, 'actual should generate the task name')
    })

    it('Shouldn\'t generate the task name', () => {
      const task = setup(false, 'C024BE7LR', false)
      
      const actual = formatTask(task)

      assert.strictEqual(actual.includes('false'), false, 'actual is generating a false task name')
    })
  })
})
