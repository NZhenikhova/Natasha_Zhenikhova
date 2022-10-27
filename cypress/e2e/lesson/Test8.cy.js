

///<reference types = 'Cypress'/>


describe('Home page', () =>

  before(() => {
      cy.visit('http://www.autopract.com/');
      cy.viewport(2250,1900);
      cy.wait(2000);

    })
);

    it.only('commandTest', () =>
         cy.clickOnElement ('[aria-label="Close"]'));



    it.only('commandTest', () =>
        cy.clickOnElement ('[aria-label="Close"]');
        cy.clickOnElement ('.bar-style');
    );


    it.only('commandTest', () =>
    cy.clickOnElement ('[aria-label="Close"]');
    cy.clickOnElement ('.bar-style');
);

it.only('commandTest', () =>
        cy.clickOnElement ('[aria-label="Close"]');
        cy.clickOnElement ('.bar-style');

  


          