export const selectors = {
    buttonMenuHome: '#mainnav > ul > li:nth-child(2)',
    homeSubMenu: '#mainnav > ul> li:nth-child(2) > ul',
    linkOnPage: '#mainnav > ul> li:nth-child(2) > ul > li > a',



}







class toolBar {


    get buttonMenuHome() {
        return '#mainnav > ul > li:nth-child(2)';


    }

    get homeSubMenu (){
        return '#mainnav > ul > li:nth-child(2) > ul';



    }


/**
 * Finds a link elements by text
 * @param {} text 
 * @returns 
 */



    pageInSectionHome(text){
          return cy.get('#mainnav > ul > li:nth-child(2) > ul > li > a').contains(text);



    }


    openPageOnSectionHome(namePage){
       cy.get(this.buttonMenuHome).click();
       cy.get(this.homeSubMenu).invoke('show');
       this.pageInSectionHome(namePage).click();

    }

   
} module.exports = new toolBar();