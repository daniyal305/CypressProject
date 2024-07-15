describe("form test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("test subscribe forms", () => {
    cy.contains(/Testing Forms/i);
    cy.contains(/Successfully subbed: daniyalshehzad305@gmail.com!/i).should('not.exist')
    cy.getDataTest("subscibe-test-input").find("input").as('subscibe-iput')
    cy.get('@subscibe-iput').type("daniyalshehzad305@gmail.com");
    cy.getDataTest("subscibe-test-button").click();
    
    cy.contains(/Successfully subbed: daniyalshehzad305@gmail.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: daniyalshehzad305@gmail.com!/i).should('not.exist')
    
    cy.get('@subscibe-iput').type("daniyalshehzad305@gmail.io");
    cy.contains(/Invalid email: daniyalshehzad305@gmail.io!/i).should('not.exist')
    cy.getDataTest("subscibe-test-button").click();
    cy.contains(/Invalid email: daniyalshehzad305@gmail.io!/i).should('exist')
    
    cy.wait(3000)
    
    cy.contains(/fail!/i).should('not.exist')
    cy.getDataTest("subscibe-test-button").click();
    cy.contains(/fail!/i).should('exist')
  });
});
