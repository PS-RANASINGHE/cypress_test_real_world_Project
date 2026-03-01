describe('Newsletter to the test the form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('allows users to subscribe to the email list', () => {
        cy.getByData('email-input').type("tom@aol.com")
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('exist').contains('tom@aol.com')
    })

    it('Does not allow invalid email address', () => {
        cy.getByData('email-input').type('kikili.com')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')
    })

    it('Does not allowed subscribed emails to resubscribe', () => {
        cy.getByData('email-input').type('john@example.com')
        cy.getByData('submit-button').click()
        cy.getByData('server-error-message').should('exist')
    })
})