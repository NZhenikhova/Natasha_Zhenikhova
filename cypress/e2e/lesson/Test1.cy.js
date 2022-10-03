describe('Авторизация', () => {
  
  
  before () => {
    cy.log ('before');
  });

  after(() => {
    cy.log('after');
  });

  BeforeEach () => {
    cy.visit ('https://facebook.com');
  });

  afterEach () => {
    cy.visit ('https://facebook.com');
  });

  it('Select form', () =>{
    cy.get('#day').select('25');
    cy.get('#month').select('дек');
    cy.get('#year').select('1991');

    cy.get('#day').invoke('val').should('eq','25');
    cy.get('#month').invoke('val').should('eq','12');
    cy.get('#year').invoke('val').should('eq','1991');
  });
});










describe('Authorization form', () => {
  
  BeforeEach () => {
    cy.visit ('https://beaxy.com');
  });

  it('Select form', () =>{

    cy.wait(3000)
     
    cy.contains('Fiat now on Beaxyqwe);

  });

});





cy.get('selector...') {  timeout : 3000 ).type






  describe('Sign Up Today', () => {
  
    BeforeEach () => {
      cy.visit ('https://www.beaxy.com/register/');
    });
  

    it('Select form', () =>{
  
      cy.wait(3000)
       
      cy.contains('Fiat now on Beaxyqwe);
  
    });
  
  });


  

  describe(SingUp), ()=>{



    it('input',()=>{
      cy.visit('https:www.beaxy.com/registered');
      cy.get('popUp-registered-email').type('natashazhenikhova');
      cy.get('#_pass').type('123456');
      cy.get('#popUp-registered-phone.valid-input').click();



      cy.get('[country-code="DE"][class*=custom]', {timeout:5000}).click();
      cy.get
    })



