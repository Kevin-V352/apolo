const nextButtonTestId: string = '[data-testid=nextButton]';
const prevButtonTestId: string = '[data-testid=prevButton]';
const pageIndicatorTestId: string = '[data-testid=pageIndicator]';

const generateUrl = (trackName: string, index: number) => (
  `http://localhost:3000/search/${trackName}/${index}`
);

describe('Song search by a user', () => {
  it('Search in the search bar', () => {
    cy.visit('/');

    cy.quickSearch('Rise', false);

    cy.contains(/RISE|Rise Up|rises the moon/);
    cy.contains('RISE').click();

    cy.contains('Álbum: RISE');
    cy.contains('Artistas: League of Legends, The Glitch Mob, Mako, The Word Alive');
    cy.contains('Fecha de lanzamiento: 28/09/2018');
    cy.contains('Duración: 3:13');
  });

  it('Search from the details page', () => {
    cy.visit('/track-details/69Sy7207dnixZ6w7RSV9Kb');

    cy.quickSearch('Feed the fire', true);
    cy.contains('FEED THE FIRE');
  });

  it('Navigate between results pages', () => {
    cy.visit('/');

    cy.quickSearch('Rise', false);

    cy.get(nextButtonTestId).click();
    cy.url().should('equal', generateUrl('Rise', 2));
    cy.get(pageIndicatorTestId).contains(2);

    cy.get(prevButtonTestId).click();
    cy.url().should('equal', generateUrl('Rise', 1));
    cy.get(pageIndicatorTestId).contains(1);
    cy.get(prevButtonTestId).should('not.exist');
  });
});
