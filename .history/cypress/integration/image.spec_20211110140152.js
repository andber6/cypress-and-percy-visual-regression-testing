describe('Visual Regression', () => {
    it('My first visual regression test', () => {
        // Load website
        cy.visit('http://example.com/')
        // Compare snapshots
        cy.addMatchImageSnapshotPlugin()
    })
})