
 describe(Валюта), ()=>{



    it('input',()=>{
      cy.visit('https:www.beaxy.com/exchange');
      cy.get('<div class="exchange-table">).scrollIntoView');
      cy.contains('<span class="view-more-text">View more</span>">').click();
      cy.contains('XTZ/BTC').should(be.visiable);


      
    })



    describe(Регистрация), ()=>{


    it('guestBefore'),()=>{
        cy.visit('https.beaxy.com/');
        cy.get('<div class="form-send-input-wrap form-send__email input').type('nznznz@gmail.com');
        cy.contains('REGISTER NOW').click();
        cy.get('[<input type="email" name="email" id="popUp-register-email" class="_valid-input register-email-monkey">').should(be.visiable);
        cy.get('.register-email-monkey').should('have.value', 'nznznz@gmail.com');


    })

