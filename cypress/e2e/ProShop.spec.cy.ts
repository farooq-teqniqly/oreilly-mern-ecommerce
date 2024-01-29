import { assertTextExact } from "../support/utilities";

const localAppUrl = "http://localhost:3000";

describe("ProShop", () => {
  it("should render the home page", () => {
    cy.visit(localAppUrl);
    assertTextExact("h1", "Welcome to Pro Shop");
  });
});
