'use strict'

const assert = require('assert')

const {
  userLinkDisplay,
  formatTask,
} = require('index')

describe('formatTask', () => {
    const task = {
        isCompleted: true,
        slackChannelId: 'C024BE7LR',
        name: 'taskOne',
    }
    const output = formatTask(task);

    it('Should return true or false for isCompleted()', (output) => {
        assert.equal("boolean", typeof output.isCompleted)
    })

    it('Should return a string', (output) => {
        assert.equal("string", typeof task.slackChannelId)
    })

    it('Should return a string', (output) => {
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
