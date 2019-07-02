describe('Home Page', function() {
  beforeEach(function(){
    cy.visit('/')
    cy.get('.ui-button.ui-corner-all.ui-widget.ui-button-icon-only.ui-dialog-titlebar-close').click()
  })

  it('checks if tabs open on click', function() {
    cy.get('.homeTab').each(function($tabButton, index) {
      // The first tab is always open and doesn't have the style, so ignore it!
      if (index == 0) {
        return
      }

      const tabName = $tabButton.attr('data-tabcontent')
      
      cy.wrap($tabButton).click().should('have.class','homeTabSelected')
      cy.get('#' + tabName).should('have.attr', 'style', 'display: block;')
    })

  })

})