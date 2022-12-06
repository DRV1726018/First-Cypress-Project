// Prueba de logeo
describe('Test suite', () => {
  it('Login', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('user232')
    cy.get('#loginpassword').type('password')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
  })

  // Prueba existencia de un botón de logout
  it('Logout', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('user232')
    cy.get('#loginpassword').type('password')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#logout2').contains('Log out')
  })

  // Prueba de que un botón contiene lo que debería
  it('El precio es de $360', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('user232')
    cy.get('#loginpassword').type('password')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get(':nth-child(1) > .card > .card-block > h5').should('have.text', '$360')
  })
})




