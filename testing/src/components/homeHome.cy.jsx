import React from 'react'
import Home from './home'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />)
    cy.get('input').should('have.class','input');
    cy.get('p').contains('Enter name:');
    cy.get('div').should('be.visible')
    cy.get('input').should('have.attr', 'type', 'text')
  })
})