describe('empty spec', () => {
  const landingPageUrl = 'https://www.demoblaze.com'
  const samsumgLinkLocator = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
  const addToCartButtonLocator = '.col-sm-12 > .btn'
  const cartButtonLocator = '#cartur'
  const firstProductNameLocator = '.success > :nth-child(2)'
  const expectedText = 'Samsung galaxy s6'
  it('Add to cart a samsumg phone', () => {
    cy.visit(landingPageUrl)
    cy.get(samsumgLinkLocator).click()
    cy.get(addToCartButtonLocator).click()
    cy.get(cartButtonLocator).click()
    cy.get(firstProductNameLocator).should('have.text', expectedText)
  })
})