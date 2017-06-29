'use strict'

const assert = require('assert')

const {
  userLinkDisplay,
  formatTask,
} = require('format.js')

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

  describe('formatTask')
})
