describe('Search', function() {
  beforeEach(function(){
    cy.visit('/')
    cy.get('.ui-button.ui-corner-all.ui-widget.ui-button-icon-only.ui-dialog-titlebar-close').click()
  })

  it('verifies no result message is visible', function() {
    cy.get('#searchBox').type('dshgfhfbgfsn{enter}')
    cy.contains('Sorry, your search did not match any products.')
  })

  it('verifies result are visible', function() {
    cy.get('#searchBox').type('acuvue oasys{enter}')
    cy.get('#ProductList').contains('ACUVUE OASYS')
    cy.get('.list-page__title').contains('acuvue oasys')
  })
 
})