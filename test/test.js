'use strict'

const assert = require('assert')

const {
  userLinkDisplay,
  formatTask,
} = require('../index.js')

describe('formatTask', () => {
    it('Should return true or false for isCompleted()', () => {
        const task = {
            isCompleted: () => true,
            slackChannelId: 'C024BE7LR',
            name: 'taskOne',
        }
    const output = formatTask(task);

        assert.equal("boolean", typeof output.isCompleted())
    })

    it('Should return a string', () => {
        const task = {
            isCompleted: () => true,
            slackChannelId: 'C024BE7LR',
            name: 'taskOne',
        }
    const output = formatTask(task);
        assert.equal("string", typeof task.slackChannelId)
    })

    it('Should return a string', () => {
        const task = {
            isCompleted: () => true,
            slackChannelId: 'C024BE7LR',
            name: 'taskOne',
        }
    const output = formatTask(task);
        assert.equal("string", typeof task.name)
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

