import { assertText } from "../support/utilities";

const localAppUrl = "http://localhost:3000";

describe("ProShop", () => {
  it("should render the home page", () => {
    cy.visit(localAppUrl);
    assertText("h1", "Pro Shop");
  });
});
