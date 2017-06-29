'use strict'

const assert = require('assert')

const {
  userLinkDisplay,
  formatTask,
} = require('../format/format.js')

describe('formatTask', () => {
    it('Should return \'<#C024BE7LR> taskOne\' for this set of parameters', () => {
        const task = {
            isCompleted: function() {return true},
            slackChannelId: 'C024BE7LR',
            name: 'taskOne',
        }
        const output = formatTask(task);

        assert.strictEqual('<#C024BE7LR> taskOne', output)
    })

    it('Should return \':warning:  <#C024BE7LR> taskOne\' for this set of parameters', () => {
        const task = {
            isCompleted: function() {return false},
            slackChannelId: 'C024BE7LR',
            name: 'taskOne',
        }
        const output = formatTask(task)

        assert.strictEqual(':warning:  <#C024BE7LR> taskOne', output) //there's a space after :warning:
    })

    it('Should return \':warning:  taskOne\' for this set of parameters', () => {
        const task = {
            isCompleted: function() {return false},
            slackChannelId: false,
            name: 'taskOne',
        }
        const output = formatTask(task)

        assert.strictEqual(':warning:  taskOne', output)
    })

    it('Should return \'taskOne\' for this set of parameters', () => {
        const task = {
            isCompleted: function() {return true},
            slackChannelId: false,
            name: 'taskOne',
        }
        const output = formatTask(task)

        assert.strictEqual('taskOne', output)
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

