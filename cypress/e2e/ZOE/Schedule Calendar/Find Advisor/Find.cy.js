describe('ZoeFin Website Find Advisor', () => {
    it('Navigate to ZoeFin Portal and find advisor', () => {
      // Visit the URL
      cy.visit('https://portal-test.zoefin.com/find-an-advisor');
  
      
      
      cy.wait(30000);
  
      // Verificar que el texto esté visible
      cy.contains('Let’s begin, do you currently have a financial advisor?').should('be.visible');



//fill the form untill the end 

        cy.get('.styles_hasAdvisor__card__modActive__gU0Gc > #has_advisor').click();
        cy.get('[data-testid]').click();

         cy.wait(1000);
            cy.get('.styles-module_baseInput__input__JY0W6').type('37');
            cy.get('.ZUIButton--primary').click();

            cy.get('#location').type('10005')
            cy.get('.ZUIButton--primary').click();

            cy.get('#financial_goals_Retirement').click();
            cy.get('.ZUIButton--primary').click();
    
    });
    

    
  });
  