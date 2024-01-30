import Header from "./Header";
import { assertText, assertClass, assertTestId } from "../../cypress/support/utilities";

describe("<Header />", () => {
  beforeEach(() => {
    cy.mount(<Header />);
  });

  it("renders menu items", () => {
    assertText("header", "Pro Shop");
    assertText("header", "Cart");
    assertText("header", "Sign In");
  });

  it("renders menu icons", () => {
    assertClass("svg", "fa-cart-shopping");
    assertClass("svg", "fa-user");
  });

  it("renders logo", () => {
    assertTestId("logo");
  });
});
