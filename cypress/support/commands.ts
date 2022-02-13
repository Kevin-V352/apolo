// Variables
const searchBarTestId: string = '[data-testid=searchInput]';

// Commands
Cypress.Commands.add('quickSearch', (query: string, cleanFirst: boolean) => {
  if (cleanFirst) cy.get(searchBarTestId).clear();
  cy.get(searchBarTestId).type(query);
});
