// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/** 
* findByText.
* @param text

*/






Cypress.Commands.add('clickOnElement', () => {
     cy.get('[aria-label="Close"]').click();




});



Cypress.Commands.add('clickOnElement', (elementLocator) => {
    cy.get(, {timeout: 2000}).click();
});



Cypress.Commands.add('typeTextInInput', (inputElement, text) => {
    cy.log('Locator',  inputLocator);
    cy.log('Only text',text);

    cy.get(`${inputElement}`, {timeout: 2000})
    .should('be.visible')
    .type(text)
    
});


Cypress.Commands.add('findByText', (text)  => {
   cy.xpath(`//*[contains(text(), '${text}')]`)


})

Cypress.Commands.add('typeTextInInput', (inputLocator, text)  => {
    cy.get(`${locator}`, {timeout: 2000})
    .should('be.visible')
    .type(text);
});


ypress.Commands.add('typeTextInInput', (inputLocator, text)  => {
    cy.get(`${locator}`, {timeout: 2000})
    .should('be.visible')
    .type(text);
});



Cypress.Commands.add('clickElement', (element) => {
    if(element[0] !== '/'){
    cy.get(`${element}`,{timeout:4000}).should('be.visible').click();
    }else{
    cy.xpath(`${element}`,{timeout:4000}).should('be.visible').click();
    }
});


Cypress.Commands.add('clickElement', (locator) => {
    if(locator[0] !== '/'){
    cy.get(`${element}`,{timeout:4000}).should('be.visible').click();
    }else{
    cy.xpath(`${locator}`,{timeout:4000}).should('be.visible').click();
    }
});


Cypress.Commands.add('findByText', (text) => {
    cy.contains(text);
});



import 'cypress-xpath';
/*
Practical task: 
Создайте команду для поиска любого элемента по тексту и назовите команду findByText 

Обратите внимание что теперь у нас стал разрастаться файл command.js

Cypress.Commands.add('findByText', (text) => {  
    cy.xpath(`//*[contains(text(), '${text}')]`)
});
*/

describe('Practical task 2', () => {

    before(() => {
      cy.visit('http://autopract.com/');
      cy.viewport(2250, 1900);
      cy.wait(2000);
     });

     it('commandTest findByText', () => {
        cy.clickElement('[aria-label="Close"]');

        cy.findByText('Men fashion').eq(1).should('exist');
        // cy.xpath("//*[contains(text(),'Men fashion')]").eq(1).should('exist');
      });


it.only('commandTest', () => {
  cy.clickOnElement('[aria-label="Close"]')

  cy.get('h4').contains('welcome to fashion');
  
cy.contains(content, options)
cy.contains(selector, content)
cy.contains(selector, content, options)
})
    
  });














  Cypress.Commands.add('clickOnElement', (elementLocator) => {
    cy.get(`${elementLocator}`, {timeout: 2000}).click();
});