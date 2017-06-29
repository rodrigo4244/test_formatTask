'use strict'

const assert = require('assert')

const {
  userLinkDisplay,
  formatTask,
} = require('../format/format.js')

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
    it('Should return \'<#C024BE7LR> taskOne\' for this set of parameters', () => {
      const task = {
        isCompleted() { return true },
        slackChannelId: 'C024BE7LR',
        name: 'taskOne',
      }
      const output = formatTask(task)

      assert.strictEqual(`<#${task.slackChannelId}> ` + `${task.name}`, output)
    })

    it('Should return \':warning:  <#C024BE7LR> taskOne\' for this set of parameters', () => {
      const task = {
        isCompleted() { return false },
        slackChannelId: 'C024BE7LR',
        name: 'taskOne',
      }
      const output = formatTask(task)

      assert.strictEqual(':warning:  ' + `<#${task.slackChannelId}> ` + `${task.name}`, output) // there's a space after :warning: and after <#${task.slackChannelId}>
    })

    it('Should return \':warning:  taskOne\' for this set of parameters', () => {
      const task = {
        isCompleted() { return false },
        slackChannelId: false,
        name: 'taskOne',
      }
      const output = formatTask(task)

      assert.strictEqual(':warning: ' + ' ' + `${task.name}`, output) // this ' ' is because of the join inside format.js
    })

    it('Should return \'taskOne\' for this set of parameters', () => {
      const task = {
        isCompleted() { return true },
        slackChannelId: false,
        name: 'taskOne',
      }
      const output = formatTask(task)

      assert.strictEqual(task.name, output)
    })
  })
})


/*
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})

*/

