describe("Home Page", () => {
  it("deve carregar a página inicial", () => {
    cy.visit("/");
    cy.contains("Home Page").should("be.visible");
  });
});
