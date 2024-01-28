describe("Reg Form", () => {
  it("Enter some value", () => {
      //cy.visit("https://qavbox.github.io/demo/signup/");
      //cy.get("#username").type("qavbox");
      //cy.get("input[value='Home']").click();
      cy.visit('https://qavbox.github.io/demo/delay/');
      cy.get("#loaderStart").click();
      cy.get('#loaderdelay', {timeout:5000, log: false}).should('have.text', 'I appeared after 5 sec loading');
  })
})