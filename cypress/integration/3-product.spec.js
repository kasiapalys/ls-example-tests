describe('Product page', function() {
  beforeEach(function(){
    cy.visit('/ciba-vision/daily-disposables/dailies-aquacomfort-plus_p5')
    cy.get('.ui-button.ui-corner-all.ui-widget.ui-button-icon-only.ui-dialog-titlebar-close').click()
  })

  it('checks if both eye columns are visible', function() {
    cy.get('#optionContainer').then(function($optionContainer) {
      cy.wrap($optionContainer).get('#Options1')
      cy.wrap($optionContainer).get('#Options2')
    })
  })

  it('clicks on both and one eye tabs', function() {
    cy.get('.units-label').eq(1).click()
    cy.get('#optionContainer').contains('One Eye')
    cy.get('#Options2').should('have.attr', 'style', 'display: none;')
   
    cy.get('.units-label').eq(0).click()
    cy.get('#optionContainer').contains('Left Eye')
    cy.get('#optionContainer').contains('Right Eye')
  })

  it('adds product to basket and removes it', function() {
    cy.get('#Options1 select').eq(0).select('-8.00')
    cy.get('#Options1 select').eq(1).select('8.7')
    cy.get('#Options1 select').eq(2).select('14.0')

    cy.get('#Options2 select').eq(0).select('-8.00')
    cy.get('#Options2 select').eq(1).select('8.7')
    cy.get('#Options2 select').eq(2).select('14.0')

    cy.get('#addtobasket_button').click()
    cy.url().should('include', '?_a=cart')
    cy.get('.basketTableLast a').click({ force: true })

    cy.get('.basketPageContent').contains('Your basket is currently empty.')
  })
})
