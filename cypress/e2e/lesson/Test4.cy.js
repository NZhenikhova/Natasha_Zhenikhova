///<reference types= "Cypress"/>
import { faker } from '@faker-js/faker';

describe ('Test', () => {
const randomEmail = faker.internet.email();
const randomName = 'AutomationTest' + faker.name.fullName();
const randomLastName = faker.name.LastName();
const id = faker.datatype.uuid();
const img = faker.image.avatar();
const arr = faker.helpers.arrayElement(['tree', 'toy'])
///data
///birthday
///password





describe('Test',() => {
     before(() => {
          cy.visit('https://www.beaxy.com/register/');
          cy.viewport(1500,900);
          cy.wait(2000)

          const randomEmail = faker.internet.email();
     });
     it(UI-test), () => {
        cy.get(".popUp-form input[type='email']").screenshot();
        cy.get("#popUp-register-email").type(randomName);
     });
});

describe('Test',() => {
    before(() => {
         cy.visit('https://www.beaxy.com/register/');
         cy.viewport(1500,900);
         cy.wait(2000)

         const randomEmail = faker.internet.email();
    });
    it('UI-test', () => {
        cy.get([onclick="myFunction()"]).click();
        cy.on('window:confirm', (textAlertForm)=>{
            expect(str).to.equal('Press aqweqwe')
        })
    )

    describe('Test',() => {
        before(() => {
             cy.visit('https://testautomationpractice.blogspot.com/');
             cy.viewport(1500,1600);
             cy.wait(2000)
            });
            it('UI-test', () => {
                cy.get('#gallery li:nth-child(1)').drag('#trash)
            


})
    )
                
    describe('Test',() => {
        before(() => {
             cy.visit('https://testautomationpractice.blogspot.com/');
             cy.viewport(1500,1600);
             cy.wait(2000)
            });
            it('UI-test', () => {
                cy.get('#gallery li:nth-child(2)').drag('#trash));


})
    )



    describe('Test',() => {
        before(() => {
             cy.visit('https://testautomationpractice.blogspot.com/');
             cy.viewport(1500,1600);
             cy.wait(2000)
            });
            it('UI-test', () => {
                cy.get('#slider span').invoke ('attr','style','left:80%')
                .should ('attr','style','left:80%')


})
    )


    describe('Test',() => {
        before(() => {
             cy.visit('https://miu.com/material-ui/react-slider/');
             cy.viewport(1500,1600);
             cy.wait(2000)
            });
            it('UI-test', () => {
                cy.get('.Muislider-root span:ntn-child(2)')
                .invoke ('attr','style','left:0%, width: 99%')
                cy.get('.Muislider-root span:ntn-child(3)')
                .invoke ('attr','style','left:99%')
                cy.get('.Muislider-root input')
                .invoke ('attr','aria-valuenow','99%')
                .invoke ('attr','value','99')
            });



})
    


describe('Test',() => {
    before(() => {
         cy.visit('https://miu.com/material-ui/react-slider/');
         cy.viewport(1500,1600);
         cy.wait(2000)
        });
        it('UI-test', () => {
            cy.get('.<div class="MuiBox-root css-1v5z18m"')
            .invoke ('attr','style','left:0%, width: 99%')
            cy.get('.Muislider-root span:ntn-child(3)')
            .invoke ('attr','style','left:99%')
            cy.get('.Muislider-root input')
            .invoke ('attr','aria-valuenow','99%')
            .invoke ('attr','value','99')
        });













npx cypress run

npx cypress run --spec "cypress\e2e\Test.cy.js"


npm install @faker-js/faker --save-dev


npm install --save-dev @4tw/cypress-drag-drop
import '@4tw/cypress-drag-drop';