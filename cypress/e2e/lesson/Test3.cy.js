describe('work'), ()=>{
    xit('new', ()=> {
      cy.viewport(1600,1024);
      cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/:www.beaxy.com/exchange');
      cy.wait(3000);
      cy.get('iFrame').then(function($iFrame){
        const iFrame = $iFrame.contents().find('body');
         cy.wrap(iFrame)
         .clear()
         .type('Hello')
      })
    });




    it('new',()=>{
        cy.viewport(1600,1080);
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
        cy.wait(5000);
        cy.get('[data-hook="add-to-cart"]').click();
        cy.wait(30000);
        cy.get('iframe').then(function($iframe){
          const iframe = $iframe.contents().find('body');
          cy.wrap(iframe).find('[class="item-name"]').then((tt)=>{
            expect(tt.text()).to.contains(' Croc Clutch ');
          })
        })
      });


    

