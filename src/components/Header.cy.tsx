import Header from "./Header";
import { assertText, assertClass } from "../../cypress/support/utilities";

describe("<Header />", () => {
  it("renders", () => {
    cy.mount(<Header />);
    assertText("header", "Pro Shop");
    assertText("header", "Cart");
    assertText("header", "Sign In");
    assertClass("svg", "fa-cart-shopping");
    assertClass("svg", "fa-user");
  });
});
