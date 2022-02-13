/* eslint-disable cypress/no-unnecessary-waiting */

const spotifyLink: string = '[data-testid=spotifyLink]';
const playButtonTestId: string = '[data-testid=playButton]';
const pauseButtonTestId: string = '[data-testid=pauseButton]';
const resetButtonTestId: string = '[data-testid=resetButton]';
const progressBarTestId: string = '[data-testid=progressBar]';

describe('Play audio in music track details', () => {
  beforeEach(() => {
    cy.visit('/track-details/4OdHYN8JT2t1jn5bH8lQWg');
  });

  it('Play music track', () => {
    cy.get(playButtonTestId).click();
    cy.get(pauseButtonTestId).should('be.visible');
    cy.get(progressBarTestId).invoke('width').should('be.greaterThan', 0);
  });

  it('Pause the track that is playing', () => {
    cy.get(playButtonTestId).click();

    cy.wait(1500);

    cy.get(pauseButtonTestId).click();

    cy.wait(1500);

    cy.get(progressBarTestId).invoke('width').then((width) => {
      cy.get(playButtonTestId).should('be.visible');
      cy.get(progressBarTestId).invoke('width').should('equal', width);
    });
  });

  it('Restart track playback', () => {
    cy.get(playButtonTestId).click();

    cy.wait(1500);

    cy.get(resetButtonTestId).click();

    cy.get(progressBarTestId).invoke('width').should('equal', 0);
  });

  it('Redirect to Spotify', () => {
    cy.window().then((win) => {
      cy.stub(win, 'open').as('open');
    });

    cy.get(spotifyLink).click();

    cy.get('@open').should('have.been.calledOnce');
  });
});
