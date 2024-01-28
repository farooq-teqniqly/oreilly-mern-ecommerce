const localAppUrl = "http://localhost:3000";

describe("ProShop", () => {
  it("should render the home page", () => {
    cy.visit(localAppUrl);
    cy.get("h1").contains("Pro Shop");
  });
});
