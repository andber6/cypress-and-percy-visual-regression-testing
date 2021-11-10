const cypress = require("cypress")

describe('Visual Regression', () => {
    it('My first visual regression test', () => {
        // Load website
        cypress.visit('http://example.com/')
        // Compare snapshots
        cy.matchImageSnapshot()
    })
})