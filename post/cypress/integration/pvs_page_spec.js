describe('check topics load', () => {
  it('goes to psv topic', () => {
    cy.visit('/');
    cy.get('#topicsLink').click();
    cy.get('#propsVStateLink').click();
    cy.get('h3').should('have.text', 'Requested topic ID: props-v-state')
  });
});
